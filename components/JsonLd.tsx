/**
 * Renders a JSON-LD structured data block.
 * Safe to use in both layout.tsx (head) and page components (body).
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
