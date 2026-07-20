const payload = {
  service_id: 'service_zs67n1f',
  template_id: 'template_hixw055',
  user_id: 'ogSGvhwDbUR0oabqR',
  template_params: {
    role: 'Test Role',
    name: 'Automated Test',
    email: 'tester@example.com',
    country: 'IN',
    phone: '+911234567890',
    location: 'Test City',
    experience: '1-2 years',
    portfolio: 'https://example.com',
    resume_link: 'test.pdf',
    message: 'This is a test message',
    time: new Date().toISOString(),
  },
};

(async () => {
  const variants = [
    { header: 'X-EmailJS-Private-Key', key: 'JaxLIAvjyJapHFsqxR-iS' },
    { header: 'x-emailjs-private-key', key: 'JaxLIAvjyJapHFsqxR-iS' },
    { header: 'Authorization', key: 'Bearer JaxLIAvjyJapHFsqxR-iS' },
    { header: 'EmailJS-Private-Key', key: 'JaxLIAvjyJapHFsqxR-iS' },
  ];

  for (const variant of variants) {
    const headers = { 'Content-Type': 'application/json' };
    headers[variant.header] = variant.key;
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    console.log('header', variant.header, 'status', resp.status, 'body', text);
  }
})();
