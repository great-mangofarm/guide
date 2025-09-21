import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function AddSitePage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">현장등록</h1>
        <p className="text-muted-foreground">
          새로운 현장을 시스템에 등록하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">등록 정보</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>현장 기본 정보</li>
            <li>위치 정보 (주소, 좌표)</li>
            <li>현장 담당자</li>
            <li>설치 예정 충전기 정보</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
