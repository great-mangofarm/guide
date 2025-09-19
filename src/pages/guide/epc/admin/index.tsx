import { DocsLayout } from '@/components/layouts/DocsLayout'
import { useGuide } from '@/contexts/GuideContext'

const adminNavigation = [
  {
    title: "시작하기",
    href: "/guide/epc/admin",
    children: [
      { title: "개요", href: "/guide/epc/admin#overview" },
      { title: "로그인", href: "/guide/epc/admin#login" }
    ]
  },
  {
    title: "사용자 관리",
    href: "/guide/epc/admin/users",
    children: [
      { title: "사용자 목록", href: "/guide/epc/admin/users#list" },
      { title: "권한 관리", href: "/guide/epc/admin/users#permissions" }
    ]
  },
  {
    title: "시스템 설정",
    href: "/guide/epc/admin/settings",
    children: [
      { title: "기본 설정", href: "/guide/epc/admin/settings#basic" },
      { title: "고급 설정", href: "/guide/epc/admin/settings#advanced" }
    ]
  }
]

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
    <DocsLayout>{/* navigation={adminNavigation} */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            EPC 업무지원 시스템 가이드
          </h1>
          <p className="text-xl text-muted-foreground">
            (에버온 임직원 전용)
          </p>
        </div>

        {/* 개요 섹션 */}
        <section id="overview">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            개요
          </h2>
          <div className="space-y-4 mt-4">
            <p className="leading-7">
              EPC 관리자 시스템은 회사의 전체 EPC 프로세스를 관리하고 모니터링할 수 있는 
              강력한 도구입니다. 이 가이드를 통해 시스템의 모든 기능을 효과적으로 
              활용하실 수 있습니다.
            </p>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold mb-2">주요 기능</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>사용자 및 권한 관리</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>프로젝트 모니터링 및 관리</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>시스템 설정 및 구성</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>보고서 생성 및 분석</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 로그인 섹션 */}
        <section id="login">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            관리자 로그인
          </h2>
          <div className="space-y-4 mt-4">
            <p className="leading-7">
              관리자 계정으로 로그인하여 시스템에 접근하는 방법을 안내합니다.
            </p>
            
            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-semibold mb-2">로그인 단계</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>EPC 관리자 페이지에 접속합니다.</li>
                <li>관리자 이메일과 비밀번호를 입력합니다.</li>
                <li>2단계 인증을 완료합니다 (활성화된 경우).</li>
                <li>대시보드에 접근합니다.</li>
              </ol>
            </div>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ 보안 주의사항</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• 관리자 계정은 절대 다른 사람과 공유하지 마세요.</li>
                <li>• 정기적으로 비밀번호를 변경하세요.</li>
                <li>• 로그아웃 후 브라우저를 완전히 닫으세요.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            다음 단계
          </h2>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h3 className="font-semibold mb-2">
                <a href="/guide/epc/admin/users" className="text-primary hover:underline">
                  사용자 관리 →
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">
                시스템 사용자를 관리하고 권한을 설정하는 방법을 알아보세요.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <h3 className="font-semibold mb-2">
                <a href="/guide/epc/admin/settings" className="text-primary hover:underline">
                  시스템 설정 →
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">
                시스템의 기본 설정과 고급 옵션을 구성하는 방법을 확인하세요.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
