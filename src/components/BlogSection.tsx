import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Sparkles,
  Tag,
  UserRound,
  X,
} from 'lucide-react';
import { CATEGORIES, POSTS, getFeaturedPost, getRelatedPosts } from '../blog/data/posts';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import PageHero from './ui/PageHero';

interface BlogSectionProps {
  onViewChange: (view: string) => void;
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));

const getCategoryLabel = (category: string) =>
  CATEGORIES.find((item: { id: string; label: string }) => item.id === category)?.label || category;

export default function BlogSection({ onViewChange }: BlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const featuredPost = getFeaturedPost();
  const activePost = activeSlug ? POSTS.find((post: any) => post.slug === activeSlug) : null;

  // Blog grid <-> article is a local state toggle, not a route change, so
  // React fully unmounts one tree and mounts a fresh one every time. The new
  // .reveal / .reveal-up nodes start at opacity: 0 (see reveal.css) and were
  // previously left stuck invisible because the app-wide scroll-reveal
  // observer doesn't reliably (or immediately) pick up this swap, and cards
  // below the fold never got a chance to intersect before the state changed
  // again. Instead of depending on that observer for this section, just
  // force every reveal element inside this section visible the moment it
  // (re)mounts, so returning from an article never shows a blank grid.
  const revealRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = revealRootRef.current;
    if (!root) return;
    const frame = requestAnimationFrame(() => {
      root
        .querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade')
        .forEach((el) => {
          el.setAttribute('data-reveal-observed', 'true');
          el.classList.add('is-visible');
        });
    });
    return () => cancelAnimationFrame(frame);
  }, [activeSlug]);

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return POSTS.filter((post: any) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch =
        !search ||
        [post.title, post.excerpt, post.author?.name, ...(post.tags || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const gridPosts =
    activeCategory === 'all' && !query.trim()
      ? filteredPosts.filter((post: any) => post.id !== featuredPost?.id)
      : filteredPosts;

  const openPost = (slug: string) => {
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setQuery('');
  };

  if (activePost) {
    const relatedPosts = getRelatedPosts(activePost);

    return (
      <section ref={revealRootRef as React.RefObject<HTMLElement>} className="pb-24 pt-3" aria-label={`Blog article: ${activePost.title}`}>
        <article>
          <header className="reveal-up relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="absolute inset-0">
              <img
                src={enhanceImageUrl(activePost.coverImage, { width: 1600, quality: 90 })}
                srcSet={enhancedSrcSet(activePost.coverImage, [768, 1200, 1600, 1920], { quality: 90 })}
                sizes="100vw"
                alt={`${activePost.title} cover image`}
                className="image-enhanced image-enhanced-photo h-full w-full object-cover opacity-90 dark:opacity-45"
                loading="eager"
                decoding="async"
              />
              <div className="reveal-up absolute inset-0 bg-linear-to-t from-white via-white/75 to-white/20 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/40" />
            </div>
            <button
              onClick={() => {
                setActiveSlug(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mb-8 mt-24 inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-950 dark:bg-[#6d28d9] px-4 py-2 mx-2 text-sm font-bold text-slate-900 backdrop-blur hover:bg-slate-200 "
            >
              <ArrowLeft size={16} />
              Back to Blog
            </button>

            <div className="reveal-up relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

              <h1 className="reveal-up max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-950 dark:text-white">
                {activePost.title}
              </h1>
              <p className="reveal-up mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700 dark:text-blue-100">
                {activePost.excerpt}
              </p>

              <div className=" reveal-upmt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-200">
                <span className="reveal-up inline-flex items-center gap-2">
                  <img
                    src={enhanceImageUrl(activePost.author.avatar, { width: 96, height: 96, quality: 90, crop: 'faces' })}
                    alt={activePost.author.name}
                    className="image-enhanced image-enhanced-photo h-8 w-8 rounded-full object-cover ring-2 ring-slate-300/60 dark:ring-white/20"
                    loading="lazy"
                    decoding="async"
                  />
                  {activePost.author.name}
                </span>
                <span className="reveal-up inline-flex items-center gap-1.5">
                  <Calendar size={15} />
                  {formatDate(activePost.publishedAt)}
                </span>
                <span className="reveal-up inline-flex items-center gap-1.5">
                  <Clock size={15} />
                  {activePost.readTime} min read
                </span>
              </div>
            </div>
          </header>

          <div className="reveal-up mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                const target = (event.target as HTMLElement).closest('[data-nav-contact]');
                if (target) {
                  event.preventDefault();
                  onViewChange('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />

            <div className="reveal-up mt-10 flex flex-wrap gap-2 border-t border-slate-200 pt-8 dark:border-slate-800">
              {activePost.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold  dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="reveal-up mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <img
                  src={enhanceImageUrl(activePost.author.avatar, { width: 144, height: 144, quality: 90, crop: 'faces' })}
                  alt={activePost.author.name}
                  className="image-enhanced image-enhanced-photo h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="reveal-up text-xs font-extrabold uppercase tracking-widest text-purple-700 dark:text-purple-300">
                    Written by
                  </div>
                  <h2 className="reveal-up mt-1 text-xl font-black text-slate-950 dark:text-white">
                    {activePost.author.name}
                  </h2>
                  <p className="reveal-up text-sm font-bold text-slate-500 dark:text-slate-400">
                    {activePost.author.role}
                  </p>
                  <p className="reveal-up mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {activePost.author.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-up mt-10 rounded-lg bg-white dark:bg-purple-900 p-7 text-black shadow-xl dark:shadow-purple-950/40">
              <h2 className="text-2xl font-black text-black dark:text-white ">Need this kind of thinking applied to your business?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-purple-100">
                Talk to MaVionix about AI automation, web systems, design, and growth workflows built around your actual operations.
              </p>
              <button
                onClick={() => {
                  onViewChange('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-sm bg-slate-950 dark:bg-[#6d28d9] px-5 py-3 text-sm font-extrabold text-slate-950 "
              >
                Start a Project
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="reveal-up mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles size={18} className="text-[#C800FF] dark:text-purple-300" />
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Related Articles</h2>
            </div>
            <div className="reveal-up grid gap-6 md:grid-cols-3">
              {relatedPosts.map((post: any, index: number) => (
                <BlogCard key={post.id} post={post} onOpen={openPost} compact index={index} />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section ref={revealRootRef as React.RefObject<HTMLElement>} className="pt-3 pb-20" aria-label="MaVionix Blog">
      <PageHero
      svg={        <UserRound size={14} className="text-purple-700 dark:text-purple-300" />}
        badge={
          <>
           
            MaVionix Knowledge Hub
          </>
        }
        title={
          <>
            Insights for the <span className="text-gradient-royal">Digital</span>{' '}
            <span className="text-slate-950 dark:text-white">Future</span> and{' '}
            <span className="text-gradient-lead">Growth</span>
          </>
        }
        description="Practical articles on AI, web development, automation, UX, and marketing from the MaVionix team."
        className="border-b-0 pb-0"
      >
        <div className="reveal-up mx-auto max-w-2xl">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
              placeholder="Search articles, topics, or authors..."
              className="h-14 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-12 text-sm font-semibold shadow-xl dark:border-slate-800 dark:bg-slate-950"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </label>
        </div>
      </PageHero>

      <div className="reveal-up mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        {featuredPost && activeCategory === 'all' && !query.trim() && (
          <div className="mb-14">
            <div className="reveal-up mb-5 flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-[#C800FF]" />
              <span className="reveal-up text-xs font-extrabold uppercase tracking-widest text-[#C800FF] dark:text-purple-300">Editor's Pick</span>
            </div>
            <button
              onClick={() => openPost(featuredPost.slug)}
              className="reveal-up group grid w-full overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[280px] sm:min-h-[340px] overflow-hidden">
                <img
                  src={enhanceImageUrl(featuredPost.coverImage, { width: 1200, quality: 90 })}
                  srcSet={enhancedSrcSet(featuredPost.coverImage, [640, 960, 1200, 1600], { quality: 90 })}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt={`${featuredPost.title} cover image`}
                  className="image-enhanced image-enhanced-photo absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="p-7 sm:p-10">
                <PostMeta post={featuredPost} />
                <h2 className="reveal-up mt-4 text-3xl sm:text-4xl font-black leading-tight text-slate-950 dark:text-white">
                  {featuredPost.title}
                </h2>
                <p className="reveal-up mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {featuredPost.excerpt}
                </p>
                <span className="reveal-up mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-purple-700 dark:text-purple-300">
                  Read featured article
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </div>
        )}

        <div className="reveal-up mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category: { id: string; label: string }) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-xs font-extrabold transition ${activeCategory === category.id
                    ? 'border-[#6d28d9] dark:bg-[#6d28d9] bg-slate-950 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:text-purple-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-purple-500/40 dark:hover:text-purple-300'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {(activeCategory !== 'all' || query) && (
            <button
              onClick={clearFilters}
              className="reveal-right inline-flex items-center gap-2 self-start rounded-sm border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-600 hover:text-purple-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            >
              <X size={14} />
              Clear filters
            </button>
          )}
        </div>

        {gridPosts.length > 0 ? (
          <div className="reveal-left grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post: any, index: number) => (
              <BlogCard key={post.id} post={post} onOpen={openPost} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-16 text-center shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <Search className="mx-auto h-10 w-10 text-slate-400" />
            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">No articles found</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
              Try another search term or clear the category filter.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 rounded-sm bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 px-5 py-3 text-sm font-extrabold text-white"
            >
              Reset Blog
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogCard({ post, onOpen, compact = false, index = 0 }: { key?: unknown; post: any; onOpen: (slug: string) => void; compact?: boolean; index?: number }) {
  return (
    <button
      onClick={() => onOpen(post.slug)}
      className="reveal-up group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-xl dark:border-slate-800 dark:bg-slate-950"
    >
      <div className=" reveal-up relative aspect-16/10 overflow-hidden">
        <img
          src={enhanceImageUrl(post.coverImage, { width: compact ? 720 : 900, quality: 90 })}
          srcSet={enhancedSrcSet(post.coverImage, compact ? [360, 540, 720] : [480, 720, 900, 1200], { quality: 90 })}
          sizes={compact ? '(min-width: 768px) 33vw, 100vw' : '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'}
          alt={`${post.title} blog preview image`}
          className="image-enhanced image-enhanced-photo h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-purple-700 backdrop-blur">
          {getCategoryLabel(post.category)}
        </span>
      </div>
      <div className="reveal-up flex flex-1 flex-col p-5">
        <PostMeta post={post} />
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} reveal-up mt-3 font-black leading-snug text-slate-950 dark:text-white`}>
          {post.title}
        </h3>
        <p className=" reveal-up mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
        <span className="reveal-up mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-purple-700 dark:text-purple-300">
          Read article
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

function PostMeta({ post }: { post: any }) {
  return (
    <div className="reveal-up flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-500 dark:text-slate-400">
      <span className="reveal-up inline-flex items-center gap-1.5">
        <UserRound size={13} />
        {post.author.name}
      </span>
      <span className="reveal-up inline-flex items-center gap-1.5">
        <Calendar size={13} />
        {formatDate(post.publishedAt)}
      </span>
      <span className="reveal-up inline-flex items-center gap-1.5">
        <Clock size={13} />
        {post.readTime} min
      </span>
    </div>
  );
}
