import ObraPage from '@/components/paginas/obras/ObraPage';

export default function Obra({
  params,
}: {
  params: { obra: string };
}) {
  return (
    <div>
      <ObraPage params={params} />
    </div>
  );
}
