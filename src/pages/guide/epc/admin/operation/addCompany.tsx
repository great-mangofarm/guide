import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function AddCompanyPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <Typography variant='h2'>업체 관리</Typography>
        <div className="space-y-4">
        <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
          운영 관리 {'>'} 업체 관리
        </Badge></Typography>
        <Callout variant="info">
          업체 관리는 EPC 업무지원시스템을 사용하여 EPC 업무 수행을 하는 협력업체들을 관리하는 기능입니다.<br />
        <strong>EPC의 업체 관리에 등록된 협력 업체만이 EPC 업무지원시스템을 사용할 수 있습니다.</strong>
        </Callout>
        </div>

        <section className="flex gap-4 w-full items-start justify-between">
          <div className="space-y-6 w-[66%]" >
            <div>
           g   <Typography variant='h4' className="pb-1" id="company-registration">1. 업체 등록 </Typography>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="info-input">1.1 정보 입력</Typography>
                <Typography variant='small' className="p-0.25">• <strong>업체명</strong>: 협력업체의 이름 입력, 타업체와 중복불가</Typography>
                <Typography variant='small' className="p-0.25">• <strong>업체 구분</strong>: 영업 / 공사 / 턴키 / 공장 중 선택, <strong>추후 변경 불가</strong></Typography>
                <Typography variant='small' className="p-0.25">• <strong>주소</strong>: 검색 값 자동입력, 직접 입력 불가</Typography>
                <Typography variant='small' className="p-0.25">• <strong>담당자</strong>: 이름 또는 직책, 자유롭게 입력</Typography>
                <Typography variant='small' className="p-0.25">• <strong>업체 구분</strong>: 영업 / 공사 / 턴키 / 공장 중 선택, <strong>추후 변경 불가</strong></Typography>
                <Typography variant='small' className="p-0.25">• <strong>사업자등록번호</strong>: 협력업체 사업자등록번호 입력, 타업체와 중복불가</Typography>
                <Typography variant='small' className="p-0.25">• <strong>연락처</strong>: 주로 이용하는 전화번호 입력</Typography>
                <Typography variant='small' className="p-0.25">• 추가 연락처: 비상 또는 추가 전화번호 입력</Typography>
                <Typography variant='small' className="p-0.25">• 이메일: 이메일 입력</Typography>
              </div>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="registration-process">1.2 등록</Typography>
                <Typography variant='small' className="p-0.25">• 필수입력란을 각 형식에 맞게 입력 후 등록하기</Typography>
                <Typography variant='small' className="p-0.25">• 등록된 업체의 경우 <strong>최초 ID/PASSWORD 모두 사업자등록번호로 생성</strong>되어 로그인 가능</Typography>
                <Typography variant='small' className="p-0.25">• 등록된 업체의 경우 별도 정보 관리 화면에서 정보 수정 가능</Typography>
              </div>
            </div>
            <div>
              <Typography variant='h4' className="pb-1" id="company-types-definition">2. 업체 구분 정의 </Typography>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="company-types">2.1 업체 구분</Typography>
                <Typography variant='small' className="p-0.25">• <strong>영업</strong>: 현장에 대한 영업 및 실사 요청, 계약까지의 과정 담당</Typography>
                <Typography variant='small' className="p-0.25">• <strong>공사</strong>: 실사 및 공사 과정 담당</Typography>
                <Typography variant='small' className="p-0.25">• <strong>턴키</strong>: 영업 + 공사 모두 또는 각각의 과정 담당</Typography>
                <Typography variant='small' className="p-0.25">• <strong>공장</strong>: 출고 요청받은 충전기의 출고 담당</Typography>
              </div>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1 font-semibold" id="company-permissions">2.2 업체 구분 별 권한 정리</Typography>
                <div className='space-y-4 py-3'>
                <div className='px-4 py-3 w-full rounded-lg bg-primary-soft'>
                  <Typography variant='smallBold' className="p-0.25">영업</Typography>
                  <Typography variant='small' className="p-0.25">1. 모든 현장에 대한 읽기 권한</Typography>
                  <Typography variant='small' className="p-0.25">2. 현장 등록 권한</Typography>
                  <Typography variant='small' className="p-0.25">3. 계약 전 관리 / 계약 관리 / 공사 관리 메뉴 접근 가능<br/>
                    &nbsp;&nbsp;&nbsp; <strong>자기가 등록한 현장</strong>에서 이어진 계약, 공사 건에 대한 읽기 / 쓰기 권한
                  </Typography>
                </div>
                <div className='px-4 py-3 w-full rounded-lg bg-warning-soft'>
                  <Typography variant='smallBold' className="p-0.25">공사</Typography>
                  <Typography variant='small' className="p-0.25">1. 계약 전 관리 / 계약 관리 / 공사 관리 메뉴 접근 가능<br/>
                    &nbsp;&nbsp;&nbsp; <strong>자기가 실사에 참가한 현장, 계약 건만 </strong>읽기 권한
                  </Typography>
                  <Typography variant='small' className="p-0.25">2. <strong>자기가 실시하는 공사 건에 대한 </strong>실사 관리 / 공사 관리 메뉴 읽기 / 쓰기 권한
                  </Typography>
                </div>
                  <div className='px-4 py-3 w-full rounded-lg bg-error-soft'>
                    <Typography variant='smallBold' className="p-0.25">턴키</Typography>
                    <Typography variant='small' className="p-0.25">1. 자기가 영업+공사 모두 맡았을 경우, 계약 전 관리 / 계약 관리 / 공사 관리 메뉴 내<br/>
                      &nbsp;&nbsp;&nbsp; <strong>자기가 영업 및 공사 실시한 모든 건에 </strong>대한 읽기 / 쓰기 권한
                    </Typography>
                    <Typography variant='small' className="p-0.25">2. 초기 권한은 영업업체와 동일, 공사만 참여했을 경우 해당 계약 건은<br/>
                      &nbsp;&nbsp;&nbsp; <strong>자기가 실사에 참가한 현장, 계약 건에 대해 </strong>읽기 권한
                    </Typography>
                  </div>
                  <div className='px-4 py-3 w-full rounded-lg bg-secondary-soft'>
                    <Typography variant='smallBold' className="p-0.25">공장</Typography>
                    <Typography variant='small' className="p-0.25">1. 물동 관리 {'>'} 충전기 출고 메뉴만 노출
                    </Typography>
                    <Typography variant='small' className="p-0.25">2. 동 관리 {'>'} 충전기 출고 메뉴 내 읽기 / 쓰기 권한
                    </Typography>
                  </div>
                </div>
                 </div>
            </div>
          </div>
          <img src="/assets/images/company_.png" className="w-100 h-auto" alt="업체등록" />
        </section>
        <PrevNextButtons
            previousPage={{
              href: "/guide/epc/admin",
              title: "EPC 시작하기"
            }}
            nextPage={{
              href: "/guide/epc/admin/operation/companies",
              title: "업체 정보 관리"
            }}
        />
      </div>
    </DocsLayout>
  )
}
