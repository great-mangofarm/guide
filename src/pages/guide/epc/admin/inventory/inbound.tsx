import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function InboundPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>충전기 입고</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              물동 관리 {'>'} 충전기 입고
            </Badge></Typography>
            <Callout variant="info">
              충전기 입고는 출고할 충전기의 모델과 시리얼 번호, 단말기 번호를 지정하여 EPC와 관제시스템에 등록하는 단계입니다.<br />
              <strong>입고된 충전기 정보를 바탕으로 최초 테스트 충전기로 등록되며, 공장업체가 해당 모델과 단말번호로 테스트를 진행합니다.</strong>
            </Callout>
          </div>
          <section className="flex gap-4 w-full items-start justify-between">
            <div className="space-y-6 w-[66%]" >
              <div>
                <Typography variant='h4' className="pb-1" id="upload">1. 엑셀 파일 업로드</Typography>
                <div className='py-1.5'>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">충전기 종류와 모델, 옵션코드, <strong>미사용 시리얼 번호와 단말기 번호</strong>엑셀 양식에 맞게 입력 후 업로드</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">틀린 내용이 있거나(모델명 등), 관제 시스템이 중복되는 단말기 번호가 있다면 엑셀 파일 내 전체 업로드 실패</Typography></li>
                    <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">업로드 성공 시 관제 시스템 내 <strong>테스트 충전기(운영중)으로 생성, 충전기 출고에서 선택 가능</strong></Typography></li>
                    <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0">날짜(엑셀 업로드 시 입력한 업로드 날짜) 별 입고 충전기 리스트 확인 가능</Typography></li>

                </div>
              </div>
            </div>

          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/construction/result",
                title: "공사 결과 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/inventory/outbound",
                title: "충전기 출고"
              }}
          />
        </div>
      </DocsLayout>
  )
}
