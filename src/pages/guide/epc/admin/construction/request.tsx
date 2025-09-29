import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function RequestPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>공사 요청 관리</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              공사 관리 {'>'} 공사 요청 관리
            </Badge></Typography>
            <Callout variant="info">
              공사 요청 관리는 공사 전 충전소 및 충전기의 설치 정보를 확인하고, 공장에 출하 요청을 하는 단게입니다.<br />
              <strong>기존 현장 혹은 업체 정보와 별도로, 공사업체가 충전기를 수령하기 위한 정보를 입력 후 출하요청을 합니다.</strong>
            </Callout>
          </div>
          <img src="/assets/images/request.png" className="w-200 h-auto" alt="실사 관리" />
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[80%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="outgoing-request">1. 충전기 출하 요청</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="contract-install-info">1.1 계약 및 설치 정보 확인</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">앞서 실사/계약 단계에서 입력된 데이터 동기화<strong>수정 불가</strong></Typography></li>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="shipment-request">1.2 충전기 출하 요청</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>수령 장소</strong>: 현장 주소와는 별개로, 공사업체가 희망하는 충전기 수령 장소 검색 후 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>설치 수량</strong>: 수령 받아야하는 충전기 수량 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>수령 담당자 정보</strong>: 업체 담당자와는 별개로, 실제 충전기를 수령받을 담당자 정보 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>수령 요청일</strong>: 충전기 수령을 희망하는 날짜 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>공사 예정일</strong>: 착공 예정일 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>충전기 출하 요청서</strong>: 출하 요청서 파일 업로드</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>요청서 검수 및 최종 출하 요청</strong>: 요청서 검수 후 출하 요청,<strong> 검수 완료 후 출하 요청이 등록/저장되면 충전기 출고에 해당 요청 데이터 생성, 검수 완료 상태로 출하 요청 시 변경 불가</strong> (출하 요청 내용은 수정 가능)</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">출하 요청이 완료되면<strong>관제 시스템에 충전소 미운영 상태로 생성</strong></Typography></li>

                </div>
              </div>
            </div>


          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/contract/approval",
                title: "환경부 승인"
              }}
              nextPage={{
                href: "/guide/epc/admin/construction/constructionExecution",
                title: "공사 진행 현황"
              }}
          />
        </div>
      </DocsLayout>
  )
}
