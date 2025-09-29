import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function SalesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <Typography variant='h2'>영업 진행 관리</Typography>
        <div className="space-y-4">
          <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
            계약 전 관리 {'>'} 영업 진행 관리
          </Badge></Typography>
          <Callout variant="info">
            영업 진행 관리는 등록된 현장에 대한 상담 및 영업 활동의 진행 상황을 체계적으로 관리하는 기능입니다.<br />
            <strong>영업 내용과 진행단계를 설정하고, 공사업체를 선정하여 실사 요청을 진행할 수 있습니다.</strong>
          </Callout>
        </div>

        <section className="flex gap-4 w-full items-start justify-between">
          <div className="space-y-6 w-[66%]" >
            <div>
              <Typography variant='h4' className="pb-1" id="sales-progress-setup">1. 계약 전 정보</Typography>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="site-data">1.1 현장 정보</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5">현장 등록한 업체 및 기본 현장 정보 데이터 동기화</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5">영업 담당자만 영업팀 목록으로 제공하여 수정가능</Typography></li>
              </div>
              
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="sales-stage">1.2 영업 진행 정보 및 충전소 기본 정보 임시설정</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>진행 현황</strong>: 현장에 대한 계약 진행 여부 선택 (계약 단계에서 취소 가능)</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>최초 영업 일자</strong>: 영업일 날짜 선택</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>영업 경로</strong>: 영업 경로 선택</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>사업 구분-1</strong>: 사업 구분-1(연도) 선택, 관제 시스템 충전소 정보로 활용</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>사업 구분-2</strong>: 사업 구분-2 선택, 관제 시스템 충전소 정보로 활용</Typography></li>
              </div>
            </div>
          </div >
          <img src="/assets/images/sales_front.png" className="w-130" alt="영업진행관리" />
        </section>
        <section className="flex gap-4 w-full items-start justify-between">
          <div className="space-y-6 w-[66%]" >
            <div>
              <Typography variant='h4' className="pb-1" id="inspection-request">2. 실사 요청</Typography>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="charger-information">2.1 충전기 종류 별 수량</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5">현장 희망 및 영업 중 협의된 충전기 종류 별 수량 입력</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5">실제 실사에서 실사 결과에 따른 값 재입력하기 때문에 확정 사항 아님</Typography></li>
              </div>

              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="select-construction-company">2.2 실사 진행 공사업체 선택 및 실사 요청 날짜 선택</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>공사업체 선택</strong>: 실사 및 공사를 진행할 업체 선택, <br/><strong>선택된 업체만 실사 관리 가능</strong><br/>본사 영업건의 경우, 여러 업체에 <strong>다중 실사 요청 가능</strong></Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>실사 요청 날짜 선택</strong>: 현장 희망 실사 진행일 선택</Typography></li>
              </div>
            </div>
          </div >
          <img src="/assets/images/sales_back.png" className="w-130" alt="영업진행관리2" />
        </section>
        
        <PrevNextButtons
            previousPage={{
              href: "/guide/epc/admin/pre-contract/sites",
              title: "현장 정보 관리"
            }}
            nextPage={{
              href: "/guide/epc/admin/pre-contract/inspections",
              title: "실사 관리"
            }}
        />
      </div>
    </DocsLayout>
  )
}
