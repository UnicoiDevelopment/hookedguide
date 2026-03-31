interface AdPlacementProps {
  id: string;
  className?: string;
}

/**
 * Ad placement component for future AdSense integration.
 * Currently renders a placeholder div. To activate:
 * 1. Replace the placeholder content with the AdSense script/tag
 * 2. Remove the hidden class or control visibility via props
 */
export default function AdPlacement({ id, className = "" }: AdPlacementProps) {
  return (
    <div
      data-ad-id={id}
      className={`hidden min-h-[90px] flex items-center justify-center text-gray-200 text-sm ${className}`}
      aria-hidden="true"
    >
      Ad
    </div>
  );
}
