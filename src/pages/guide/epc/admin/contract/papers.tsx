import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function PapersPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>계약 서류 관리</Typography>
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
                <Typography variant='h4' className="pb-1" id="contract-paper">3. 서류 등록</Typography>
                <div className='py-1.5'>

                  <Typography variant='h5' className="pb-1" id="paper-input">3.1 파일 업로드</Typography>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>신청서, 계약서, 사업자등록증, 개인정보 제공 동의서, 건출물대장</strong>&nbsp; 5개서류는 필수 업로드 사항</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">업로드된 서류의 검수 여부 확인 가능. 미등록 상태거나 최초 업로드는 미검수상태<br/>검수 완료라도, 문서를 <strong>재업로드 하게 되면 미검수 상태로 변경</strong></Typography></li>
                   </div>
              </div>
            </div>

            <img src="/assets/images/contract_3.png" className="w-120 h-auto" alt="계약 관리" />

          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/contract/contracts",
                title: "계약 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/contract/approval",
                title: "환경부 승인"
              }}
          />
        </div>
      </DocsLayout>
  )
}
