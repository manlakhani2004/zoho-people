function Section({ title }: { title: string }) {
  return (
    <div className="mt-10">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 h-[1px] w-full bg-slate-200" />
    </div>
  );
}


export default Section