import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function InspectionsPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <Typography variant='h2'>실사 관리</Typography>
        <div className="space-y-4">
          <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
            계약 전 관리 {'>'} 실사 관리
          </Badge></Typography>
          <Callout variant="info">
            실사 관리는 공사 업체가 실사를 진행한 후, 추후 계약 및 공사 진행 시 실제로 설치될 충전소 및 충전기 정보에 대한 관리를 하는 기능입니다.<br />
            <strong>계약과 공사 모두 실사 관리에서 입력받은 데이터를 기반으로 관리하게 됩니다.</strong>
          </Callout>
        </div>
        <img src="/assets/images/_inspections.png" className="w-240 h-auto" alt="실사 관리" />
        <section className="flex gap-4 w-full items-start justify-between">
          <div className="space-y-6 w-[66%]" >
            <div>
              <Typography variant='h4' className="pb-1" id="inspection-execution">1. 실사 정보</Typography>
              <div className='py-1.5'>
                <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">영업 진행 관리에서 입력한 실사 요청 정보 기반</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>실사 진행 일자</strong>: 실제 실사가 진행된 일자 선택</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>거점 수</strong>: 한 현장에 설치할 충전소의 숫자(관제 기준), 해당 수만큼 관제시스템에 충전소 생성</Typography></li>
              </div>
            </div>
              <div>
                <Typography variant='h4' className="pb-1" id="site-survey">2. 실사 관리</Typography>
                <div className='py-1.5'>
                <Typography variant='small' className="p-0.5">• <strong>충전소명</strong>: 지역+현장명 기준으로 자동생성, 수정 가능하지만, EPC와 관제 내 존재하는 충전소명과 중복불가</Typography>
                <Typography variant='small' className="p-0.5">• <strong>충전기 종류</strong>:해당 종류에 맞는 각 충전소별 설치할 충전기수 입력</Typography>
                <Typography variant='small' className="p-0.5">• <strong>상세위치/설치타입/실내외/전기인입</strong>: 각 해당값에 맞는 충전소별 설치 정보 입력</Typography>
                <Typography variant='small' className="p-0.5">• <strong>각종 비용</strong>: 실사 결과 발생 비용 입력</Typography>
                <Typography variant='small' className="p-0.5">• <strong>현장점검 확인서</strong>: 현장 점검 확인서 업로드</Typography>
            </div>
              </div>
          </div>


        </section>
        
        <PrevNextButtons
            previousPage={{
              href: "/guide/epc/admin/pre-contract/sales",
              title: "영업 진행 관리"
            }}
            nextPage={{
              href: "/guide/epc/admin/contract/contracts",
              title: "계약 등록"
            }}
        />
      </div>
    </DocsLayout>
  )
}
