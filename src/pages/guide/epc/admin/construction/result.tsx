import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function ResultPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>공사 결과 관리</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              공사 관리 {'>'} 결과 관리
            </Badge></Typography>
            <Callout variant="info">
              결과 관리는 준공이 완료된(준공일 입력) 공사건에 대하여, 공사를 마무리하기 위한 파일을 업로드하는 단계입니다.<br />
              <strong>사업구분에 따른 각 파일을 업체가 업로드하면, 서류를 검수하여 최종적으로 공사 결과를 완료 짓습니다.</strong>
            </Callout>
          </div>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="upload">1. 파일 업로드</Typography>
                <div className='py-1.5'>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">공사 완료를 위한 파일 업로드, 사업 구분에 따라 필수 서류 항목이 달라짐</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>보조금 사업:  (사업구분-2: 환경공단/에너지공단/브랜드사업/서울시)</strong><br/>전기 안전관리자 선임 신고 증명서 외 7가지 서류 필수</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>투자 사업: (사업구분-2: 보조금 사업 항목 외)</strong>: <br/>공서류, 행위 신고 증명서 또는 전기사용계약서, 전기 사용신청 접수 증명서, 전기 안전 점검 확인서 또는 사용전 점검증, 전기사용 신청서 (날인본) 5가지 서류</Typography></li>
                </div>
                <Typography variant='h4' className="pb-1 pt-1.5" id="check">2. 파일 검수</Typography>
                <div className='py-1.5'>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">업로드된 파일에 대한 검수 진행</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">필수 서류에 대한 검수를 모두 완료하고 저장되면<strong>현장등록부터 시작된 해당 공사건은 최종 완료 상태가 되며 검수 및 업로드 변경 불가</strong></Typography></li>
                </div>
              </div>
            </div>

            <img src="/assets/images/result.png" className="w-125 h-auto" alt="계약 관리" />

          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/pre-contract/inspections",
                title: "실사 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/contract/papers",
                title: "충전기 입고"
              }}
          />
        </div>
      </DocsLayout>
  )
}
