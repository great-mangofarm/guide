import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function ContractsPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>계약 등록</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              계약 관리 {'>'} 계약 관리
            </Badge></Typography>
            <Callout variant="info">
              계약 관리는 실사가 완료된 현장에 대하여, 실제로 계약이 진행됨에 따라 계약 내용을 관리하는 기능입니다.<br />
              <strong>계약을 등록하면서, 충전소의 유형과 실사의 결과를 확정하며 환경부 승인을 위한 문서를 등록합니다.</strong>
            </Callout>
          </div>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="contract-info">1. 계약 정보</Typography>
                <div className='py-1.5'>

                  <Typography variant='h5' className="pb-1" id="info-input">1.1 정보 입력</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>현장 선택</strong>: 자신이 등록한 현장 중 실사가 완료된 건 검색 후 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 관리명</strong>: 계약 시점 및 구분에 따라 계약명 자동생성</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 여부</strong>: 계약 진행 여부, 최초 등록하는 계약의 경우 <strong>진행 자동 입력, 수정 불가</strong></Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 일자</strong>: 계약을 체결한 시점일</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 구분</strong>: 2021~2027 중 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>사업 구분</strong>: 영업 진행 관리에서 등록한 <strong>사업 구분-2</strong>. 기존값 자동 선택, 한 번 더 선택하여 확정</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 시작 일자</strong>: 계약서상 계약 시작 일자</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>계약 종료 일자</strong>: 계약서상 계약 종료 일자</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>충전기 소유주</strong>: 충전기 소유주 (에버온, 에버온 인프라, 신청자)</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>부지 사용 기간</strong>: 연단위 숫자로 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>부지 사용 금액</strong>: 원단위 숫자로 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>분/완납</strong>: 납부방식 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>도색 요청</strong>: 도색 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>B2B 정산</strong>: B2B 정산 여부</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>예상 보조금</strong>: 원단위 숫자로 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>프로모션 진행 여부</strong>: 예 선택 시 프로모션 금액 입력 가능</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>프로모션 금액</strong>: 프로모션 진행 햇수와 금액 입력</Typography></li>
                </div>
              </div>
            </div>

            <img src="/assets/images/contract_1.png" className="w-120 h-auto" alt="계약 관리" />

          </section>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="contract-info">2. 실사 정보</Typography>
                <div className='py-1.5'>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">실사관리에서 입력된 충전기 종류별 수량 확인, 변경 사항 있을 시 <strong>실사 관리에서 수정</strong> (환경부 승인 전까지 수정 가능)</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">추가 부자재 수량 입력</Typography></li>
                </div>
              </div>
            </div>

            <img src="/assets/images/contract_2.png" className="w-120 h-auto" alt="계약 관리" />

          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/pre-contract/inspections",
                title: "실사 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/contract/papers",
                title: "계약 서류 관리"
              }}
          />
        </div>
      </DocsLayout>
  )
}
