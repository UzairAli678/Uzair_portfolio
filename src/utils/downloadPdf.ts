export async function downloadPdf(url: string, filename: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);
}
