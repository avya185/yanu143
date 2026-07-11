import { IMPACT_METRICS, IMPACT_METRICS_FOOTNOTE } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import SectionHeader from '../ui/SectionHeader';

function MetricCard({ metric }) {
  const { ref, value } = useCountUp(metric.value, 1800, true, metric.decimals ?? 0);

  const displayValue = metric.decimals
    ? value.toFixed(metric.decimals)
    : value;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-purple-200/80 bg-purple-50/80 p-6 text-center dark:border-purple-500/20 dark:bg-purple-500/8"
    >
      <p className="text-4xl sm:text-5xl font-black text-[#1A2E5A] dark:text-purple-300">
        {displayValue}
        {metric.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{metric.label}</p>
    </div>
  );
}

/**
 * ImpactMetrics — Animated statistics grid (blueprint Section 7).
 */
const ImpactMetrics = () => (
  <section className="py-20 bg-slate-50 dark:bg-[#0a0814]" aria-labelledby="metrics-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="metrics-heading"
        badge="Proven Results"
        title="Our Numbers Tell the Story"
        subtitle="Cumulative delivery metrics across MaVionix projects — websites, mobile apps, AI solutions, design, marketing, and cybersecurity engagements."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {IMPACT_METRICS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        {IMPACT_METRICS_FOOTNOTE}
      </p>
    </div>
  </section>
);

export default ImpactMetrics;
