import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";

export default function SitesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">현장 정보 관리</h1>
        <div className="space-y-4">
          <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
            계약 전 관리 {'>'} 현장 관리
          </Badge></Typography>
          <Callout variant="info">
            현장 관리는 계약 전 상담 및 영업을 진행한 장소에 대한 정보을 저장, 관리하는 기능입니다.<br />
            <strong>현장 정보는 관제 시스템까지 정보가 연동되는 계약 및 공사로 이어지는 업무 프로세스의 첫 단계입니다.</strong>
          </Callout>
        </div>
        <p className="text-muted-foreground">
          등록된 현장들의 정보를 조회하고 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">관리 기능</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>현장 목록 조회</li>
            <li>현장 상세 정보 수정</li>
            <li>현장 상태 관리</li>
            <li>진행 단계 추적</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
