import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-0",
        className
      )}
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
