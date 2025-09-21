import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function AddCompanyPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">업체등록</h1>
        <p className="text-muted-foreground">
          새로운 업체를 시스템에 등록하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">등록 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>업체 기본 정보 입력</li>
            <li>사업자등록증 업로드</li>
            <li>담당자 정보 등록</li>
            <li>승인 요청</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
