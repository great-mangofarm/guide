import { DocsLayout } from '@/components/layouts/DocsLayout'
import { useGuide } from '@/contexts/GuideContext'
import {Typography} from "@/components/ui/typography.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function EPCAdminGuide() {
  const { hasAccess } = useGuide()
  
  // 접근 권한 확인
  if (!hasAccess('epc', 'admin')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">접근 권한이 없습니다</h1>
          <p className="text-muted-foreground">EPC Admin 문서에 접근할 권한이 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <DocsLayout>
      <img src="/assets/images/image12.png" className="absolute right-90 top-10 w-40" alt="장식"/>
      <div className="bg-primary px-8 py-6 rounded-md">
        <Typography variant='h1' className="text-text-inverse text-3xl" >EPC 업무지원 시스템 가이드</Typography>
        <Typography variant='large' className="text-text-inverse font-regular"> (에버온 임직원 전용)</Typography>
      </div>
      <div className="mt-8 space-y-6">
        <section id="overview" className="space-y-4">
          <Typography variant='caption' className=" font-(--font-weight-semibold)">{'>'} ver 0.3.0 (2025.09.25)</Typography>
          <Typography variant="small">
            EPC 업무지원시스템은 업체등록부터 충전소 준공까지의 EPC 전체 프로세스를 관리하는 시스템입니다.<br/>
            업무 진행 중 궁금한 점이 있으시면 이 가이드를 참고하여 효율적으로
            시스템을 활용하실 수 있습니다.
          </Typography>
           <Callout variant="warning" className='mt-6'>본 가이드는 2025년 9월 리뉴얼된 에버온 EPC 업무지원 시스템의 가이드 문서로, 에버온 임직원 전용입니다. 외부 노출을 금지합니다.</Callout>
        </section>

        <section>
          <Typography variant='h4' className="pb-1">1. EPC 기본 원칙 </Typography>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">1.1 전체 프로세스의 1:1:1 관리</Typography>
            <Typography variant='small' className="p-0.25">• 1개의 현장에서는 1개의 계약만, 1개의 계약에서는 1개의 공사만 가능</Typography>
            <Typography variant='small' className="p-0.25">• 현장 → 실사 → 계약 → 공사의 1대1대1 매칭</Typography>
          </div>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">1.2 업무 단계별 완료 의무화</Typography>
            <Typography variant='small' className="p-0.25">• 프로세스 상 이전 단계가 100% 완료되어야 다음 단계 진행 가능</Typography>
            <Typography variant='small' className="p-0.25">• 승인 여부에 따른 전체 계약 / 실사 / 공사 진행 상태 변경</Typography>
          </div>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">1.3 데이터 연동 기반 업무 처리</Typography>
            <Typography variant='small' className="p-0.25">• 모든 단계에서 실시간 데이터 동기화</Typography>
            <Typography variant='small' className="p-0.25">• 중간 데이터 누락 시 프로세스 진행 불가</Typography>
          </div>
        </section>

        <section>
          <Typography variant='h4' className="pb-1">2. 주요 메뉴 및 프로세스 변경점 </Typography>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">2.1 프로세스 순서 변경</Typography>
            <Typography variant='small' className="p-0.25">• 기존: 계약 → 실사 (계약 관리 작성 후 실사 요청 및 실사 관리)</Typography>
            <Typography variant='small' className="font-bold p-0.25">• 리뉴얼: 실사 → 계약 (실사 완료 후, 실사 내용을 바탕으로 계약 관리)</Typography>
          </div>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">2.2 메뉴 구조 개편</Typography>
            <img src="/assets/images/menu_.png" className="w-205 mb-2 -mt-2" alt="메뉴"/>
            <Typography variant='small' className="p-0.25">• 계약 전 관리(현장 등록 및 실사) → 계약 관리 (계약 진행 및 심사) → 공사 관리 (출고요청, 공사 및 점검) </Typography>
            <Typography variant='small' className="p-0.25">• 물동 관리 (충전기 입•출고)</Typography>
            <Typography variant='small' className="p-0.25">• 운영 관리 (업체 및 정산 관리)</Typography>
          </div>
          <div className='py-1.5'>
            <Typography variant='h5' className="pb-1">1.3 데이터 연동 기반 업무 처리</Typography>
            <Typography variant='small' className="p-0.25">• 모든 단계에서 실시간 데이터 동기화</Typography>
            <Typography variant='small' className="p-0.25">• 중간 데이터 누락 시 프로세스 진행 불가</Typography>
          </div>
        </section>

        {/* 페이지 네비게이션 */}
        <PrevNextButtons
          nextPage={{
            href: "/guide/epc/admin/operation/addCompany",
            title: "업체 관리"
          }}
        />
      </div>
    </DocsLayout>
  )
}
