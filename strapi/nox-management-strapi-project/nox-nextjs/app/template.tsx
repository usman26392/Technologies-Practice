
"use client"

export default function Template({ children }: { children: React.ReactNode }) {
    console.log("template component rendered");
	return <div>{children}</div>;
}
