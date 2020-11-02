interface IBreadcrumbItem {
  position: number;
  text: string;
  link?: string;
}

export const generateBreadcrumb = ({
  items = [],
}: {
  items: IBreadcrumbItem[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.text,
      item: item.link,
    })),
  };
};
