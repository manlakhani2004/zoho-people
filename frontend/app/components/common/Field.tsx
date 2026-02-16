function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <div className="text-xs text-slate-500">{label}</div>
      {children}
    </div>
  );
}

export default Field;