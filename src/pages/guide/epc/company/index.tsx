import { DocsLayout } from '@/components/layouts/DocsLayout'
import { useGuide } from '@/contexts/GuideContext'

const companyNavigation = [
  {
    title: "시작하기",
    href: "/guide/epc/company",
    children: [
      { title: "개요", href: "/guide/epc/company#overview" },
      { title: "로그인", href: "/guide/epc/company#login" }
    ]
  },
  {
    title: "프로젝트 관리",
    href: "/guide/epc/company/projects",
    children: [
      { title: "프로젝트 생성", href: "/guide/epc/company/projects#create" },
      { title: "진행 상황 확인", href: "/guide/epc/company/projects#status" }
    ]
  },
  {
    title: "문서 관리",
    href: "/guide/epc/company/documents",
    children: [
      { title: "문서 업로드", href: "/guide/epc/company/documents#upload" },
      { title: "승인 요청", href: "/guide/epc/company/documents#approval" }
    ]
  }
]

export default function EPCCompanyGuide() {
  const { hasAccess } = useGuide()
  
  // 접근 권한 확인
  if (!hasAccess('epc', 'company')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">접근 권한이 없습니다</h1>
          <p className="text-muted-foreground">EPC Company 문서에 접근할 권한이 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <DocsLayout title="EPC Company Guide">{/* navigation={companyNavigation} */}
      <div className="space-y-6">
        {/* 페이지 헤더 */}
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            EPC 업체 사용자 가이드
          </h1>
          <p className="text-xl text-muted-foreground">
            EPC 프로젝트 참여 업체를 위한 상세한 사용 가이드입니다.
          </p>
        </div>

        {/* 개요 섹션 */}
        <section id="overview">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            개요
          </h2>
          <div className="space-y-4 mt-4">
            <p className="leading-7">
              EPC 시스템을 통해 프로젝트에 효과적으로 참여하고, 문서를 관리하며, 
              진행 상황을 추적할 수 있습니다. 이 가이드는 업체 담당자가 시스템을 
              최대한 활용할 수 있도록 도와드립니다.
            </p>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold mb-2">업체용 주요 기능</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>프로젝트 참여 및 관리</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>설계 문서 제출 및 수정</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>승인 과정 추적</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>커뮤니케이션 도구</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 로그인 섹션 */}
        <section id="login">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            업체 계정 로그인
          </h2>
          <div className="space-y-4 mt-4">
            <p className="leading-7">
              업체 계정으로 로그인하여 할당된 프로젝트에 접근하는 방법입니다.
            </p>
            
            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-semibold mb-2">로그인 과정</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>초대받은 이메일의 링크를 클릭합니다.</li>
                <li>업체 계정 정보를 입력합니다.</li>
                <li>초기 비밀번호를 안전한 비밀번호로 변경합니다.</li>
                <li>할당된 프로젝트 대시보드에 접근합니다.</li>
              </ol>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">💡 처음 사용하시나요?</h4>
              <p className="text-blue-700 text-sm">
                계정 생성은 프로젝트 관리자가 진행합니다. 
                계정 관련 문의는 담당 프로젝트 매니저에게 연락하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 빠른 시작 가이드 */}
        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            빠른 시작 가이드
          </h2>
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h3 className="font-semibold mb-2 text-green-700">1단계: 프로젝트 확인</h3>
              <p className="text-sm text-muted-foreground mb-2">
                할당된 프로젝트 목록을 확인하고 기본 정보를 파악하세요.
              </p>
              <a href="/guide/epc/company/projects" className="text-primary hover:underline text-sm">
                프로젝트 관리 보기 →
              </a>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h3 className="font-semibold mb-2 text-blue-700">2단계: 문서 준비</h3>
              <p className="text-sm text-muted-foreground mb-2">
                필요한 설계 문서를 준비하고 업로드 방법을 익혀보세요.
              </p>
              <a href="/guide/epc/company/documents" className="text-primary hover:underline text-sm">
                문서 관리 보기 →
              </a>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            자주 묻는 질문
          </h2>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h4 className="font-semibold mb-2">Q: 비밀번호를 잊어버렸어요</h4>
              <p className="text-sm text-muted-foreground">
                로그인 페이지의 "비밀번호 찾기" 버튼을 클릭하거나, 
                프로젝트 관리자에게 재설정을 요청하세요.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h4 className="font-semibold mb-2">Q: 문서 업로드 형식은 무엇인가요?</h4>
              <p className="text-sm text-muted-foreground">
                PDF, DWG, DXF 형식을 지원하며, 파일 크기는 최대 50MB까지 가능합니다.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h4 className="font-semibold mb-2">Q: 승인이 지연되고 있어요</h4>
              <p className="text-sm text-muted-foreground">
                승인 현황은 프로젝트 대시보드에서 실시간으로 확인할 수 있으며, 
                급한 경우 담당자에게 직접 문의하세요.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
