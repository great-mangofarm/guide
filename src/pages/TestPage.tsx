import { Button } from "@/components/ui/button"

export default function TestPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">컴포넌트 테스트 페이지</h1>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Button 컴포넌트</h2>
        
        <div className="flex gap-4">
          <Button>Default Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔥</Button>
        </div>
      </div>
    </div>
  )
}
