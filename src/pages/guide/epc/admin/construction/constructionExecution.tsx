import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function ConstructionExecutionPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>공사 진행 현황</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              공사 관리 {'>'} 공사 진행 현황
            </Badge></Typography>
            <Callout variant="info">
              공사 진행 현황은 실제 공사가 진행되가는 과정을 입력하는 단계입니다.<br />
              <strong>입고/착공/준공/검사 등의 각 단계로 현황과, 충전소 별 계량기 정보를 입력합니다.</strong>
            </Callout>
          </div>
          <img src="/assets/images/exe_1.png" className="w-240 h-auto -mb-1" alt="공사 진행 현황" />
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[80%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="construction-execution">1. 공사 진행 정보</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="charger-meter-info">1.1 충전소 별 계량기 정보</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전소 별 계량기 정보 입력, 계기번호는 추후 관제 시스템에서 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">전기 안전 점검 일자가 선택된 경우 계량기 정보는 모두 필수 입력 항목이 되며,<br/><strong>전기 안전 점검일자, 계량기 정보가 모두 입력된 후 공사 진행 현황이 저장되면 관제 시스템에 계량기 정보 생성</strong></Typography></li>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="execution-info">1.2 공사 진행 정보</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">진행 정보 날짜 선택은 전단계가 선택되야만 다음 단계가 선택가능</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>충전기 입고일</strong>: 실제로 충전기를 수령받은 날짜 선택, 해당 날짜 선택 후 저장 시 <strong>관제 시스템에 충전소 및 충전기 운영상태로 변경</strong></Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>착공일</strong>: 공사 시작 날짜 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>준공일</strong>: 공사 완료 날짜 입력, 해당 항목 입력 시, 공사 결과 관리에 데이터 생성</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>전기 안전 점검 일자</strong>: 안전 점검 시행 날짜 입력, 입력 시 모든 계량기 정보 필수 입력</Typography></li>
                   </div>
              </div>
            </div>
          </section>

          <img src="/assets/images/exe_2.png" className="w-240 h-auto -mb-1" alt="충전기 세부 정보" />
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[80%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="charger-info">2. 충전기 세부 정보</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="charger-detail">2.1 입고 충전기 정보</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 출고에서 충전기 인수증을 발급하며 출고를 완료한 경우, 충전기 세부 정보 탭에 충전기 정보 노출</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 출고에서 정해진 충전소 별 충전기 정보(모델, 시리얼번호, 단말번호 등)와, 설치 정보 동기화</Typography></li>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="chaeger-receipt">2.2 충전기 인수증</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 출고 시, 공장업체가 출고 충전기 정보가 담긴 충전기 인수증 발급</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">1. 인수증 다운로드 후 내용 확인(출고 전 다운로드 불가)</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">2. 내용 확인 후 날인</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">3. 날인한 인수증 업로드</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">인수증 업로드 후 저장 시 <strong>충전기 출고의 해당 출고건에서 인수증 다운로드 가능</strong></Typography></li>
                </div>
              </div>
            </div>
          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/construction/request",
                title: "공사 요청 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/construction/result",
                title: "공사 결과 관리"
              }}
          />
        </div>
      </DocsLayout>
  )
}
