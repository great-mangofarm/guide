import { DocsLayout } from '@/components/layouts/DocsLayout'
import { useGuide } from '@/hooks/useGuide'
import { Typography } from "@/components/ui/typography.tsx"
import { Callout } from "@/components/ui/callout.tsx"
import { PrevNextButtons } from "@/components/PrevNextButtons.tsx"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function FAQPage() {
  const { hasAccess } = useGuide()
  const location = useLocation()
  const [openAccordion, setOpenAccordion] = useState<string>("")
  
  // URL hash를 확인하여 해당 FAQ 항목을 열고 스크롤
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      // FAQ 항목인 경우 accordion을 열기
      if (hash.startsWith('item-') || hash.startsWith('process-') || hash.startsWith('tech-')) {
        setOpenAccordion(hash)
        // DOM이 업데이트된 후 스크롤
        setTimeout(() => {
          scrollToElement(hash)
        }, 500)
      } else {
        // 일반 헤딩인 경우 바로 스크롤
        setTimeout(() => {
          scrollToElement(hash)
        }, 100)
      }
    }
  }, [location.hash])

  // 검색에서 FAQ 항목 선택 시 accordion 열기를 위한 이벤트 리스너
  useEffect(() => {
    const handleOpenAccordion = (event: CustomEvent) => {
      const { value } = event.detail
      setOpenAccordion(value)
    }

    window.addEventListener('openAccordion', handleOpenAccordion as EventListener)
    return () => {
      window.removeEventListener('openAccordion', handleOpenAccordion as EventListener)
    }
  }, [])

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 56 // 헤더 높이
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetTop = elementTop - headerHeight - 16
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }
  
  // 접근 권한 확인
  if (!hasAccess('epc', 'admin')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">접근 권한이 없습니다</h1>
          <p className="text-muted-foreground">FAQ 문서에 접근할 권한이 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <DocsLayout>
      <div className="bg-primary px-8 py-6 rounded-md">
        <Typography variant='h1' className="text-text-inverse text-3xl">자주 묻는 질문 (FAQ)</Typography>
        <Typography variant='large' className="text-text-inverse font-regular">에버온 EPC 업무지원 시스템 전용</Typography>
      </div>

      <div className="mt-2 flex flex-col gap-12">
        <section id="overview" className="space-y-4">
          <Callout variant="warning" className='mt-6'>
            에버온 EPC 업무지원 시스템 사용 중 자주 묻는 질문들을 정리했습니다. 찾으시는 내용이 없다면, IT 개발실 EPC 담당자에게 문의해주세요.
          </Callout>
        </section>

        <section>
          <Typography variant='h4'  id="general-questions">1. 로그인 및 메뉴</Typography>
          <Accordion type="single" collapsible className="w-full" value={openAccordion} onValueChange={setOpenAccordion}>
            <AccordionItem value="item-1" id="item-1">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  EPC 업무지원 시스템에 로그인할 수 없어요
                </Typography>
              </AccordionTrigger>
              <AccordionContent>

                    <Typography variant='small'>EPC 업무지원 시스템은, 에버온 임직원 한정, 두레이 로그인과 동일한 KEYCLOAK 방식을 사용합니다. 에버온 계정을 통해서만 로그인이 가능하며, 만약 에버온 계정으로 로그인 시도가 계속 실패할 경우 IT개발실 박재용 매니저를 찾아주세요.</Typography>

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" id="item-2">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  특정 메뉴가 보이지 않아요
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <Typography variant="small">
                    사용자별로 권한이 다르게 설정되어 있습니다:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-sm"><strong>EPC Admin:</strong> 모든 메뉴 접근 가능</li>
                    <li className="text-sm"><strong>영업 / 공사 / 턴키 업체:</strong> 계약 전 관리, 계약 관리, 공사 관리</li>
                    <li className="text-sm"><strong>공장 업체:</strong> 물동 관리 {'>'} 충전기 출고 메뉴만</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" id="item-3">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  자꾸 로그아웃 상태로 바껴요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <Typography variant="small">
                    EPC 업무지원 시스템은 로그인 인증을 2시간 동안 유지합니다. 2시간 동안 사이트 내에서 아무런 활동이 없을 시 로그아웃상태로 변경됩니다.<br/>
                    계속 이용할 경우, 로그인 인증은 자동으로 연장됩니다.
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <Typography variant='h4' className="pb-2" id="process-questions">2. 프로세스 관련 질문</Typography>
          
          <Accordion type="single" collapsible className="w-full" value={openAccordion} onValueChange={setOpenAccordion}>
            <AccordionItem value="process-1" id="process-1">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  실사 관리에 원하는 현장 영업건이 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  실사 관리에 데이터가 생성되기 위해서는 두 가지 조건이 필요합니다.
                </Typography>
                <li>- 영업 진행 관리에서 진행현황이 <strong>진행</strong> 상태</li>
                <li>- 영업 진행 관리에서 실사 요청에서 <strong>실사 공사업체, 실사 요청 날짜, 종류별 충전기 수량</strong>&nbsp;입력 상태</li>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process-2" id="process-2">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  환경부 승인 일자를 선택할 수 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  환경부 승인 일자를 선택하기 위해서는 두 가지 조건이 필요합니다.
                </Typography>
                <li>- 승인 관리에서 <strong>에버온 접수 일자</strong> 선택</li>
                <li>- <strong>환경부 승인 여부 승인</strong>&nbsp; 상태</li>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process-3" id="process-3">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  공사 요청 현황에 원하는 공사건이 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  공사 요청 현황에 데이터가 생성되기 위해서는 한 가지 조건이 필요합니다.
                </Typography>
                <li>- 승인 관리에서 환경부 승인 일자 선택 후 저장 (환경부 승인이 완료된 건만 공사 요청 현황에 표시)</li>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-4" id="process-4">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  공사 진행 현황 / 충전기 출고에 원하는 공사건이 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  공사 진행 현황과 충전기 출고에 데이터가 생성되기 위해서는 한 가지 조건이 필요합니다.
                </Typography>
                <li>- 공사 요청 현황에서 출하 요청 검수 완료 후 저장</li>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-5" id="process-5">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  공사 진행 현황에서 날짜 선택이 불가능해요. (착공일, 준공일, 전기 안전 점검 일자)
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  공사 진행 현황의 날짜 선택은 앞 단계를 먼저 선택해야 날짜 선택이 가능합니다. <br/>
                  충전기 입고일 → 착공일 → 준공일 → 전기 안전 점검 일자 순서대로 입력할 수 있습니다.
                </Typography>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-6" id="process-6">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  공사 진행 현황에서 충전기 세부 정보 탭에 아무 내용도 없어요
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  충전기 세부 정보 탭은, 충전기 출고가 모두 완료되야 표시됩니다.
                </Typography>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-7" id="process-7">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  공사 진행 현황에서 인수증 다운로드를 할 수 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  공사 진행 현황에서 인수증 다운로드는, 충전기 출고가 모두 완료되고 출고 시 인수증 발급이 체크되어야 다운로드가 가능합니다.
                </Typography>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-8" id="process-8">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  충전기 출고에서 인수증 다운로드를 할 수 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  충전기 출고에서 인수증 다운로드는, 충전기 진행 현황에서 공사업체가 날인 후 재업로드 시 다운로드가 가능합니다.
                </Typography>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="process-9" id="process-9">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  충전기 출고에서 원하는 모델명이나 시리얼 번호가 없어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="small" className="pb-1.5">
                  충전기 출고에서 원하는 모델명이 없다면 두 가지를 확인해주세요.
                </Typography>
                <li>1. 설치 예정 충전기가 찾는 모델명의 종류와 일치하는지 (7kW 설치 예정에, 7kW 모델을 찾는지)</li>
                <li>2. 해당 모델의 충전기가 수량에 맞게 입고가 되었는 지</li>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <Typography variant='h4' className="pb-2" id="technical-questions">3. 기타</Typography>
          
          <Accordion type="single" collapsible className="w-full" value={openAccordion} onValueChange={setOpenAccordion}>
            <AccordionItem value="tech-1" id="tech-1">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  검수(혹은 반려) 상태로 변경시킨 문서의 검수 상태가 미검수로 변경되었어요.
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                  <Typography variant="small">
                   파일이 재업로드되었다면, 문서의 검수상태는 다시 미검수 상태로 변경됩니다. 파일을 다운받아 확인해주세요.
                  </Typography>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tech-2" id="tech-2">
              <AccordionTrigger>
                <Typography variant="medium" className="font-medium text-left">
                  관제 시스템에 언제 데이터가 생성되나요?
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1">
                  <Typography variant="small">
                    충전소 생성:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-sm">1. 출하 요청서의 검수가 완료된 상태로, 공사 요청 현황이 저장되었을때, "미운영" 상태로 최초 생성</li>
                    <li className="text-sm">2. 공사 진행 현황에서 충전기 입고일이 선택된 상태로 저장되었을때, "운영" 상태로 변경</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <Typography variant="small">
                    충전기 생성:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-sm">1. 충전기 입고 시 테스트 충전기 "운영" 상태로 최초 생성</li>
                    <li className="text-sm">2. 충전기 출고 및 인수증 발급 체크된 상태로 충전기 출고 시, 테스트 충전기 "000" 시작 단말번호로 "해지" 상태로 변경, 실 사용될 충전기 "미운영" 상태로 생성</li>
                    <li className="text-sm">3. 공사 진행 현황에서 충전기 입고일이 선택된 상태로 저장되었을때, "운영" 상태로 변경</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <Typography variant="small">
                    계량기 생성:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li className="text-sm">1. 공사 진행 현황에서 전기 안전 점검 일자 선택 후 저장 시 계량기 정보 생성</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>


        {/* 페이지 네비게이션 */}
        <PrevNextButtons
          previousPage={{
            href: "/guide/epc/admin/inventory/outbound",
            title: "충전기 출고"
          }}
        />
      </div>
    </DocsLayout>
  )
}
