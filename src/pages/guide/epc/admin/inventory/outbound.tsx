import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function OutboundPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>충전기 출고</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              물동 관리 {'>'} 충전기 출고
            </Badge></Typography>
            <Callout variant="info">
              충전기 출고는 공장에서 공사 현장으로 출고되는 충전기 정보 입력 및 충전기 채번 확인을 할 수 있는 단계입니다.<br />
              <strong>충전기 출고 정보를 입력하고, 인수증을 발급 및 다운받을 수 있는 출고 전반의 과정을 진행합니다.</strong>
            </Callout>
          </div>
          <img src="/assets/images/outgoing-1.png" className="w-220 h-auto -mb-1" alt="수령 정보 확인" />
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-full" >
              <div>
                <Typography variant='h4' className="pb-1" id="outbound-receiving">1. 충전기 수령 정보</Typography>
                <div className='py-1.5'>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">공사 요청 현황에서 입력한 충전기 수령 정보 동기화 및 확인</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">수령 정보는 수정 불가</Typography></li>
                </div>
              </div>
            </div>
          </section>

          <img src="/assets/images/outgoing-2.png" className="w-240 h-auto -mb-1" alt="충전기세부입력 및 출고" />
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-full" >
              <div>
                <Typography variant='h4' className="pb-1" id="outbound-charger">2. 충전기 출고</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="outbound-detail">2.1 충전기 정보 입력</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 입고에서 입고된 충전기 중 선택하여, 모델, 시리얼 번호, 단말기 번호 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>충전기 모델</strong>: EPC에 입고된 충전기 중, 충전소에 설치될 충전기 종류에 맞는 모델 리스트만 노출, 그 중 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>시리얼 번호</strong>: EPC에 입고된 충전기 중, 충전기 모델에서 선택된 모델에 해당하는 시리얼 번호만 노출, 그 중 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>단말기 번호</strong>: 앞서 선택된 충전기 모델과 시리얼 번호에 해당하는 단말기 번호 자동선택, 변경 불가</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>출고 일자</strong>: 수령 요청일과 관계없이, 실제로 충전기를 출고한 일자 선택</Typography></li>

                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="outbound-receipt-doc">2.2 충전기 인수증</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">인수증 발급 체크 후 충전기 출고 관리 저장 시, 공사 요청 현황에서 출고된 충전기 정보의 인수증 다운로드 가능</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 출고 및 인수증 발급 체크 후 저장해야 관제 시스템에 정상적으로 <strong>기존의 입고 되었던 테스트 충전기의 단말번호 000으로 변경되며 해지 처리 및 실사용 충전기 생성</strong></Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>인수증 다운로드</strong>: <strong>공사 진행 현황에서, 공사업체가 인수증 확인 후 날인하여 재업로드</strong> 시 다운로드 가능</Typography></li>
                </div>
              </div>
            </div>
          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/inventory/inbound",
                title: "충전기 입고"
              }}
              nextPage={{
                href: "/guide/epc/admin/faq",
                title: "자주 묻는 질문 (FAQ)"
              }}
          />
        </div>
      </DocsLayout>
  )
}
