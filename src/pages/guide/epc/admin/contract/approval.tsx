import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function ApprovalPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>환경부 승인</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              계약 관리 {'>'} 서류 관리
            </Badge></Typography>
            <Callout variant="info">
              서류 관리는 계약 관리에서 입력된 내용과 업로드된 문서를 바탕으로 환경부 승인 절차를 입력하는 기능입니다.<br />
              <strong>업로드된 문서들의 검수를 진행하고, 환경부 승인의 진행 내용을 기록합니다.</strong>
            </Callout>
          </div>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="approval">1. 승인 관리</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="paper-input">1.1 접수 일자 구분</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>업체 접수 일자</strong>: 업체가 필수 업로드 서류 포함하여, EPC 상에 계약을 등록한 날짜</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>에버온 접수 일자</strong>: 에버온에서 환경부 승인을 위해 접수한 날짜</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>환경부 승인 일자</strong>: 해당 계약건에 대해 환경부 승인이 난 날짜</Typography></li>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="approval-status">1.2 승인 현황 입력</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">기본 계약 내용 데이터 동기화</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>에버온 접수 일자</strong>: 환경부 접수일, 이 날짜가 선택되어야만 다음 항목들 입력 가능</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>환경부 대기 번호</strong>: 최초로 받은 대기 번호 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>환경부 승인 여부</strong>: 대기/거부/보완/승인, 승인 결과 입력이 별도 없다면 대기 상태</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>환경부 승인 일자</strong>: 승인 결과 결정 일자 선택</Typography></li>

                </div>
              </div>
            </div>

            <img src="/assets/images/paper-1.png" className="w-120 h-auto" alt="계약 관리" />

          </section>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="document-review">2. 서류 검수</Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1" id="contract-review">2.1 계약 서류 검수</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">계약 등록 시 업로드된 서류에 대한 검수, 미검수/반려/검수</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">여기서 선택한 검수 항목이 계약 관리에 노출</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">미업로드된 파일 항목은 미검수 상태 고정, 변경 불가</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>필수 서류가 모두 검수 상태일 경우, 서류 검수 완료 상태</strong></Typography></li>
                </div>
              </div>
            </div>

            <img src="/assets/images/paper-2.png" className="w-120 h-auto" alt="계약 관리" />

          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/contract/papers",
                title: "계약 서류 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/construction/request",
                title: "공사 요청 관리"
              }}
          />
        </div>
      </DocsLayout>
  )
}
