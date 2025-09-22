import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";
import {Quote} from "@/components/ui/quote.tsx";

export default function CompaniesPage() {
  return (
      <DocsLayout>
        <div className="space-y-6">
          <Typography variant='h2'>업체 정보 관리</Typography>
          <div className="space-y-4">
            <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
              운영관리 {'>'} 업체관리
            </Badge></Typography>
            <Callout variant="info">
              업체 관리는 EPC 업무지원시스템을 사용하여 EPC 업무 수행을 하는 협력업체들을 관리하는 기능입니다.<br />
              <strong>EPC의 업체 관리에 등록된 협력 업체만이 EPC 업무지원시스템을 사용할 수 있습니다.</strong>
            </Callout>
          </div>

          <section className="flex gap-4 w-full items-start justify-between">
              <div>
                <Typography variant='h4' className="pb-1">1. 업체 정보 조회 및 수정 </Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1">1.1 정보 조회 및 수정</Typography>
                  <Typography variant='small' className="p-0.25">• 업체 데이터 테이블 클릭 시 상세 정보 조회 및 수정 가능</Typography>
                  <Typography variant='small' className="p-0.25">• <strong>업체 구분 / 사업자등록번호</strong>는 수정 불가</Typography>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1">1.2 연동 업체 등록 </Typography>
                <Quote title="연동업체란?">
                    • 영업↔공사, 턴키↔공사 등 서로 다른 구분의 업체끼리 연동되어야만,하나의 계약~공사 건을 진행 가능 <br />
                    • 계약을 진행하는 영업(혹은 턴키)업체는 연동된 공사(혹은 턴키)업체만 실사 및 공사업체로 지정 가능 <br />
                  </Quote>
                  <Typography variant='small' className="p-0.25">• 업체에게 요청받은 연동 업체 검색 후 등록 (여러 업체 연동 가능)</Typography>
                  <Typography variant='small' className="p-0.25">• 한 쪽에 연동 시 연동된 업체에도 자동 추가</Typography>
                  <Typography variant='small' className="p-0.25">• 공장 업체는 연동 업체 추가 불가</Typography>
                </div>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1">1.3 비밀번호 초기화 </Typography>
                  <Typography variant='small' className="p-0.25">• 비밀번호 초기화 시 초기 비밀번호<strong>(업체의 사업자비밀번호)</strong>로 해당 업체 비밀번호 초기화</Typography>
                </div>
            </div>
            <img src="/assets/images/company_info-1.png" className="w-105 h-auto" alt="업체수정1" />
          </section>
          <section className="flex gap-4 w-full items-start justify-between">
              <div >
                <Typography variant='h4' className="pb-1">2. 업체 문서 관리 </Typography>
                <div className='py-1.5'>
                  <Typography variant='h5' className="pb-1">2.1 문서 관리</Typography>
                  <Typography variant='small' className="p-0.25">• 업체가 업로드한 해당 업체의 <strong>사업자등록증 / 통장사본 / 지명원</strong> 파일 검수 관리 </Typography>
                  <Typography variant='small' className="p-0.25">• 파일 다운로드 후 검수 / 반려 상태 저장 가능</Typography>
                  <Typography variant='small' className="p-0.25">• 업체가 재업로드했을 경우 미검수 상태로 초기화</Typography>
                  <Typography variant='small' className="p-0.25">• 관리자가 직접 업로드 가능</Typography>
                </div>
            </div>
            <img src="/assets/images/company_info-2.png" className="w-105 h-auto" alt="업체수정2" />
          </section>
          <PrevNextButtons
              previousPage={{
                href: "/guide/epc/admin/operation/addCompany",
                title: "업체 관리"
              }}
              nextPage={{
                href: "/guide/epc/admin/pre-contract/addSite",
                title: "현장 관리"
              }}
          />
        </div>
      </DocsLayout>
  )
}
