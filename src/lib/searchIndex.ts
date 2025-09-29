// 검색 가능한 항목의 타입 정의
export interface SearchItem {
  id: string
  title: string
  content: string
  path: string
  menuPath: string // "운영 관리 > 업체 관리" 형태
  type: 'heading' | 'faq'
  level?: number // h1=1, h2=2, h3=3, h4=4, h5=5
  anchor?: string // 페이지 내 스크롤할 앵커 ID
}

// 검색 인덱스 데이터 - h4, h5만 포함
export const searchIndex: SearchItem[] = [
  // === 업체 관리 ===
  {
    id: 'company-registration',
    title: '업체 등록',
    content: '협력업체 정보 입력 및 등록',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 4,
    anchor: 'company-registration'
  },
  {
    id: 'company-info-input',
    title: '정보 입력',
    content: '업체명, 업체 구분, 주소, 담당자, 사업자등록번호, 연락처 입력',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 5,
    anchor: 'info-input'
  },
  {
    id: 'company-registration-process',
    title: '등록',
    content: '필수입력란 입력 후 등록, 최초 ID/PASSWORD 사업자등록번호로 생성',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 5,
    anchor: 'registration-process'
  },
  {
    id: 'company-types-definition',
    title: '업체 구분 정의',
    content: '영업, 공사, 턴키, 공장 업체 구분 및 권한 설명',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 4,
    anchor: 'company-types-definition'
  },
  {
    id: 'company-types',
    title: '업체 구분',
    content: '영업, 공사, 턴키, 공장 업체 설명',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 5,
    anchor: 'company-types'
  },
  {
    id: 'company-permissions',
    title: '업체 구분 별 권한 정리',
    content: '영업, 공사, 턴키, 공장 업체별 메뉴 접근 권한 및 읽기/쓰기 권한',
    path: '/guide/epc/admin/operation/addCompany',
    menuPath: '운영 관리 > 업체 관리',
    type: 'heading',
    level: 5,
    anchor: 'company-permissions'
  },

  // === 업체 정보 관리 ===
  {
    id: 'company-info-management',
    title: '업체 정보 조회 및 수정',
    content: '등록된 업체 정보 조회, 수정, 연동 업체 등록, 비밀번호 초기화',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 4,
    anchor: 'company-info-management'
  },
  {
    id: 'info-query-edit',
    title: '정보 조회 및 수정',
    content: '업체 데이터 조회 및 수정, 업체 구분과 사업자등록번호는 수정 불가',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 5,
    anchor: 'info-query-edit'
  },
  {
    id: 'linked-company-registration',
    title: '연동 업체 등록',
    content: '영업과 공사 업체 간 연동 설정, 한 쪽 연동 시 자동 양방향 추가',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 5,
    anchor: 'linked-company-registration'
  },
  {
    id: 'password-reset',
    title: '비밀번호 초기화',
    content: '업체 비밀번호를 사업자등록번호로 초기화',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 5,
    anchor: 'password-reset'
  },
  {
    id: 'company-document-management',
    title: '업체 문서 관리',
    content: '업체 제출 문서 검수 관리',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 4,
    anchor: 'company-document-management'
  },
  {
    id: 'document-management',
    title: '문서 관리',
    content: '사업자등록증, 통장사본, 지명원 파일 검수 및 관리',
    path: '/guide/epc/admin/operation/companies',
    menuPath: '운영 관리 > 업체 정보 관리',
    type: 'heading',
    level: 5,
    anchor: 'document-management'
  },

  // === 영업 진행 관리 ===
  {
    id: 'sales-progress-setup',
    title: '계약 전 정보',
    content: '현장 정보 및 영업 진행 정보, 충전소 기본 정보 임시설정',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 4,
    anchor: 'sales-progress-setup'
  },
  {
    id: 'site-data',
    title: '현장 정보',
    content: '현장 등록한 업체 및 기본 현장 정보 데이터 동기화, 영업 담당자만 영업팀 목록으로 제공하여 수정가능',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 5,
    anchor: 'site-data'
  },
  {
    id: 'sales-stage',
    title: '영업 진행 정보 및 충전소 기본 정보 임시설정',
    content: '진행 현황, 최초 영업 일자, 영업 경로, 사업 구분-1, 사업 구분-2 설정',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 5,
    anchor: 'sales-stage'
  },
  {
    id: 'inspection-request',
    title: '실사 요청',
    content: '충전기 종류별 수량 입력 및 실사 진행 공사업체 선택',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 4,
    anchor: 'inspection-request'
  },
  {
    id: 'charger-information',
    title: '충전기 종류 별 수량',
    content: '현장 희망 및 영업 중 협의된 충전기 종류 별 수량 입력',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 5,
    anchor: 'charger-information'
  },
  {
    id: 'select-construction-company',
    title: '실사 진행 공사업체 선택 및 실사 요청 날짜 선택',
    content: '공사업체 선택, 실사 요청 날짜 선택, 다중 실사 요청 가능',
    path: '/guide/epc/admin/pre-contract/sales',
    menuPath: '계약 전 관리 > 영업 진행 관리',
    type: 'heading',
    level: 5,
    anchor: 'select-construction-company'
  },

  // === 현장등록 ===
  {
    id: 'site-registration-detail',
    title: '현장 등록',
    content: '현장 정보 입력 및 등록 과정',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 4,
    anchor: 'site-registration'
  },
  {
    id: 'info-input-detail',
    title: '정보 입력',
    content: '업체명, 현장명, 사업자등록번호, 현장번호, 주소, 담당자, 연락처, 인입경로, 시설 유형 등 입력',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 5,
    anchor: 'info-input'
  },
  {
    id: 'registration-process-detail',
    title: '등록 과정',
    content: '필수입력란 입력 후 등록, 최초 ID/PASSWORD 사업자등록번호로 생성',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 5,
    anchor: 'registration-process'
  },
  {
    id: 'site-update-detail',
    title: '정보 수정',
    content: '현장 정보 수정 및 동일 현장 관리',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 4,
    anchor: 'site-update'
  },
  {
    id: 'update-process',
    title: '정보 수정',
    content: '현장의 정보 수정은 입력과 규칙 및 양식이 동일, 실사까지 완료된 현장의 경우 수정 불가',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 5,
    anchor: 'update'
  },
  {
    id: 'add-site-number',
    title: '동일 현장 관리',
    content: '동일 현장에 계약 추가/변경이 된 경우, 현장번호를 추가하여 현장 추가 등록 필수',
    path: '/guide/epc/admin/pre-contract/addSite',
    menuPath: '계약 전 관리 > 현장등록',
    type: 'heading',
    level: 5,
    anchor: 'add-site-number'
  },

  // === 실사 관리 ===
  {
    id: 'inspection-execution',
    title: '실사 정보',
    content: '영업 진행 관리에서 입력한 실사 요청 정보 기반, 실사 진행 일자, 거점 수 입력',
    path: '/guide/epc/admin/pre-contract/inspections',
    menuPath: '계약 전 관리 > 실사 관리',
    type: 'heading',
    level: 4,
    anchor: 'inspection-execution'
  },
  {
    id: 'site-survey',
    title: '실사 관리',
    content: '충전소명, 충전기 종류, 상세위치/설치타입/실내외/전기인입, 각종 비용, 현장점검 확인서 관리',
    path: '/guide/epc/admin/pre-contract/inspections',
    menuPath: '계약 전 관리 > 실사 관리',
    type: 'heading',
    level: 4,
    anchor: 'site-survey'
  },

  // === 환경부 승인 ===
  {
    id: 'approval-management-detail',
    title: '승인 관리',
    content: '접수 일자 구분 및 승인 현황 입력',
    path: '/guide/epc/admin/contract/approval',
    menuPath: '계약 관리 > 환경부 승인',
    type: 'heading',
    level: 4,
    anchor: 'approval'
  },
  {
    id: 'paper-input-dates',
    title: '접수 일자 구분',
    content: '업체 접수 일자, 에버온 접수 일자, 환경부 승인 일자 구분',
    path: '/guide/epc/admin/contract/approval',
    menuPath: '계약 관리 > 환경부 승인',
    type: 'heading',
    level: 5,
    anchor: 'paper-input'
  },
  {
    id: 'approval-status-input',
    title: '승인 현황 입력',
    content: '에버온 접수 일자, 환경부 대기 번호, 환경부 승인 여부, 환경부 승인 일자 입력',
    path: '/guide/epc/admin/contract/approval',
    menuPath: '계약 관리 > 환경부 승인',
    type: 'heading',
    level: 5,
    anchor: 'approval-status'
  },
  {
    id: 'document-review-management',
    title: '서류 검수',
    content: '계약 서류 검수 관리',
    path: '/guide/epc/admin/contract/approval',
    menuPath: '계약 관리 > 환경부 승인',
    type: 'heading',
    level: 4,
    anchor: 'document-review'
  },
  {
    id: 'contract-review-process',
    title: '계약 서류 검수',
    content: '계약 등록 시 업로드된 서류에 대한 검수, 미검수/반려/검수 상태 관리',
    path: '/guide/epc/admin/contract/approval',
    menuPath: '계약 관리 > 환경부 승인',
    type: 'heading',
    level: 5,
    anchor: 'contract-review'
  },

  // === 공사 요청 관리 ===
  {
    id: 'construction-request-detail',
    title: '충전기 출하 요청',
    content: '계약 및 설치 정보 확인, 충전기 출하 요청',
    path: '/guide/epc/admin/construction/request',
    menuPath: '공사 관리 > 공사 요청 관리',
    type: 'heading',
    level: 4,
    anchor: 'outgoing-request'
  },
  {
    id: 'request-contract-info',
    title: '계약 및 설치 정보 확인',
    content: '앞서 실사/계약 단계에서 입력된 데이터 동기화, 수정 불가',
    path: '/guide/epc/admin/construction/request',
    menuPath: '공사 관리 > 공사 요청 관리',
    type: 'heading',
    level: 5,
    anchor: 'contract-install-info'
  },
  {
    id: 'request-shipment',
    title: '충전기 출하 요청',
    content: '수령 장소, 설치 수량, 수령 담당자 정보, 수령 요청일, 공사 예정일, 충전기 출하 요청서 입력',
    path: '/guide/epc/admin/construction/request',
    menuPath: '공사 관리 > 공사 요청 관리',
    type: 'heading',
    level: 5,
    anchor: 'shipment-request'
  },

  // === 공사 진행 현황 ===
  {
    id: 'construction-progress-info',
    title: '공사 진행 정보',
    content: '충전소 별 계량기 정보 및 공사 진행 정보 입력',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 4,
    anchor: 'construction-execution'
  },
  {
    id: 'charger-meter-info',
    title: '충전소 별 계량기 정보',
    content: '충전소 별 계량기 정보 입력, 전기 안전 점검 일자 선택 시 필수',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 5,
    anchor: 'charger-meter-info'
  },
  {
    id: 'execution-info',
    title: '공사 진행 정보',
    content: '충전기 입고일, 착공일, 준공일, 전기 안전 점검 일자 입력',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 5,
    anchor: 'execution-info'
  },
  {
    id: 'execution-charger-info',
    title: '충전기 세부 정보',
    content: '입고 충전기 정보 및 충전기 인수증 관리',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 4,
    anchor: 'charger-info'
  },
  {
    id: 'execution-charger-detail',
    title: '입고 충전기 정보',
    content: '충전기 출고에서 출고를 완료한 경우, 충전기 정보 노출',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 5,
    anchor: 'charger-detail'
  },
  {
    id: 'execution-receipt',
    title: '충전기 인수증',
    content: '인수증 다운로드, 날인 후 업로드',
    path: '/guide/epc/admin/construction/constructionExecution',
    menuPath: '공사 관리 > 공사 진행 현황',
    type: 'heading',
    level: 5,
    anchor: 'chaeger-receipt'
  },

  // === 충전기 입고 ===
  {
    id: 'inbound-upload',
    title: '엑셀 파일 업로드',
    content: '충전기 종류, 모델, 옵션코드, 시리얼 번호, 단말기 번호 엑셀 업로드',
    path: '/guide/epc/admin/inventory/inbound',
    menuPath: '물동 관리 > 충전기 입고',
    type: 'heading',
    level: 4,
    anchor: 'upload'
  },

  // === 충전기 출고 ===
  {
    id: 'outbound-receiving-info',
    title: '충전기 수령 정보',
    content: '공사 요청 현황에서 입력한 충전기 수령 정보 동기화 및 확인',
    path: '/guide/epc/admin/inventory/outbound',
    menuPath: '물동 관리 > 충전기 출고',
    type: 'heading',
    level: 4,
    anchor: 'outbound-receiving'
  },
  {
    id: 'outbound-charger-info',
    title: '충전기 출고',
    content: '충전기 정보 입력 및 충전기 인수증 발급',
    path: '/guide/epc/admin/inventory/outbound',
    menuPath: '물동 관리 > 충전기 출고',
    type: 'heading',
    level: 4,
    anchor: 'outbound-charger'
  },
  {
    id: 'outbound-charger-detail',
    title: '충전기 정보 입력',
    content: '충전기 모델, 시리얼 번호, 단말기 번호, 출고 일자 선택',
    path: '/guide/epc/admin/inventory/outbound',
    menuPath: '물동 관리 > 충전기 출고',
    type: 'heading',
    level: 5,
    anchor: 'outbound-detail'
  },
  {
    id: 'outbound-receipt',
    title: '충전기 인수증',
    content: '인수증 발급 체크 후 저장 시 공사 요청 현황에서 다운로드 가능',
    path: '/guide/epc/admin/inventory/outbound',
    menuPath: '물동 관리 > 충전기 출고',
    type: 'heading',
    level: 5,
    anchor: 'outbound-receipt-doc'
  },

  // === FAQ 질문들 ===
  {
    id: 'faq-login-issue',
    title: 'EPC 업무지원 시스템에 로그인할 수 없어요',
    content: 'EPC 업무지원 시스템은 에버온 임직원 한정, 두레이 로그인과 동일한 KEYCLOAK 방식을 사용합니다. 에버온 계정을 통해서만 로그인이 가능합니다.',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 로그인 및 메뉴',
    type: 'faq',
    anchor: 'item-1'
  },
  {
    id: 'faq-menu-not-visible',
    title: '특정 메뉴가 보이지 않아요',
    content: 'EPC Admin: 모든 메뉴 접근 가능, 영업/공사/턴키 업체: 계약 전 관리, 계약 관리, 공사 관리, 공장 업체: 물동 관리 충전기 출고 메뉴만',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 로그인 및 메뉴',
    type: 'faq',
    anchor: 'item-2'
  },
  {
    id: 'faq-logout-issue',
    title: '자꾸 로그아웃 상태로 바껴요',
    content: 'EPC 업무지원 시스템은 로그인 인증을 2시간 동안 유지합니다. 2시간 동안 사이트 내에서 아무런 활동이 없을 시 로그아웃상태로 변경됩니다.',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 로그인 및 메뉴',
    type: 'faq',
    anchor: 'item-3'
  },
  {
    id: 'faq-inspection-site-missing',
    title: '실사 관리에 원하는 현장 영업건이 없어요',
    content: '영업 진행 관리에서 진행현황이 진행 상태, 실사 요청에서 실사 공사업체, 실사 요청 날짜, 종류별 충전기 수량 입력 상태',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-1'
  },
  {
    id: 'faq-approval-date-disabled',
    title: '환경부 승인 일자를 선택할 수 없어요',
    content: '승인 관리에서 에버온 접수 일자 선택, 환경부 승인 여부 승인 상태',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-2'
  },
  {
    id: 'faq-construction-request-missing',
    title: '공사 요청 현황에 원하는 공사건이 없어요',
    content: '승인 관리에서 환경부 승인 일자 선택 후 저장 (환경부 승인이 완료된 건만 공사 요청 현황에 표시)',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-3'
  },
  {
    id: 'faq-construction-progress-missing',
    title: '공사 진행 현황 / 충전기 출고에 원하는 공사건이 없어요',
    content: '공사 요청 현황에서 출하 요청 검수 완료 후 저장',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-4'
  },
  {
    id: 'faq-date-selection-disabled',
    title: '공사 진행 현황에서 날짜 선택이 불가능해요',
    content: '착공일, 준공일, 전기 안전 점검 일자. 충전기 입고일 → 착공일 → 준공일 → 전기 안전 점검 일자 순서대로 입력',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-5'
  },
  {
    id: 'faq-charger-details-empty',
    title: '공사 진행 현황에서 충전기 세부 정보 탭에 아무 내용도 없어요',
    content: '충전기 세부 정보 탭은, 충전기 출고가 모두 완료되야 표시됩니다',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-6'
  },
  {
    id: 'faq-construction-receipt-download',
    title: '공사 진행 현황에서 인수증 다운로드를 할 수 없어요',
    content: '공사 진행 현황에서 인수증 다운로드는, 충전기 출고가 모두 완료되고 출고 시 인수증 발급이 체크되어야 다운로드가 가능합니다',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-7'
  },
  {
    id: 'faq-outbound-receipt-download',
    title: '충전기 출고에서 인수증 다운로드를 할 수 없어요',
    content: '충전기 출고에서 인수증 다운로드는, 충전기 진행 현황에서 공사업체가 날인 후 재업로드 시 다운로드가 가능합니다',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-8'
  },
  {
    id: 'faq-charger-model-missing',
    title: '충전기 출고에서 원하는 모델명이나 시리얼 번호가 없어요',
    content: '설치 예정 충전기가 찾는 모델명의 종류와 일치하는지, 해당 모델의 충전기가 수량에 맞게 입고가 되었는지 확인',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 프로세스 관련 질문',
    type: 'faq',
    anchor: 'process-9'
  },
  {
    id: 'faq-document-status-change',
    title: '검수(혹은 반려) 상태로 변경시킨 문서의 검수 상태가 미검수로 변경되었어요',
    content: '파일이 재업로드되었다면, 문서의 검수상태는 다시 미검수 상태로 변경됩니다',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 기타',
    type: 'faq',
    anchor: 'tech-1'
  },
  {
    id: 'faq-control-system-data',
    title: '관제 시스템에 언제 데이터가 생성되나요',
    content: '충전소 생성: 출하 요청서 검수 완료시 미운영 상태로 생성, 충전기 입고일 선택시 운영 상태로 변경. 충전기 생성: 충전기 입고시 테스트 충전기 운영 상태 생성, 충전기 출고 및 인수증 발급시 실 사용 충전기 미운영 상태 생성',
    path: '/guide/epc/admin/faq',
    menuPath: 'FAQ > 기타',
    type: 'faq',
    anchor: 'tech-2'
  }
]

// 검색 함수
export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return []
  
  const lowercaseQuery = query.toLowerCase()
  
  return searchIndex.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(lowercaseQuery)
    const contentMatch = item.content.toLowerCase().includes(lowercaseQuery)
    const menuMatch = item.menuPath.toLowerCase().includes(lowercaseQuery)
    
    return titleMatch || contentMatch || menuMatch
  }).sort((a, b) => {
    // 제목에 정확히 일치하는 것을 우선순위로
    const aExactTitle = a.title.toLowerCase() === lowercaseQuery
    const bExactTitle = b.title.toLowerCase() === lowercaseQuery
    
    if (aExactTitle && !bExactTitle) return -1
    if (!aExactTitle && bExactTitle) return 1
    
    // 제목에 포함되는 것을 다음 우선순위로
    const aTitleMatch = a.title.toLowerCase().includes(lowercaseQuery)
    const bTitleMatch = b.title.toLowerCase().includes(lowercaseQuery)
    
    if (aTitleMatch && !bTitleMatch) return -1
    if (!aTitleMatch && bTitleMatch) return 1
    
    // 같은 조건이면 알파벳 순으로
    return a.title.localeCompare(b.title)
  })
}
