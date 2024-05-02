export function load({ params }: any) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
