import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Callout} from "@/components/ui/callout.tsx";
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function AddSitePage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <Typography variant='h2'>현장 정보 관리</Typography>
        <div className="space-y-4">
          <Typography variant='small' className="font-(--font-weight-medium) text-text-subtle">페이지: <Badge variant="subtle" >
            계약 전 관리 {'>'} 현장 관리
          </Badge></Typography>
          <Callout variant="info">
            현장 관리는 계약 전 상담 및 영업을 진행한 장소에 대한 정보을 저장, 관리하는 기능입니다.<br />
            <strong>현장 정보는 관제 시스템까지 정보가 연동되는 계약 및 공사로 이어지는 업무 프로세스의 첫 단계입니다.</strong>
          </Callout>
        </div>

        <section className="flex gap-4 w-full items-start justify-between">
          <div className="space-y-6 w-[66%]" >
            <div>
              <Typography variant='h4' className="pb-1" id="site-registration">1. 현장 등록 </Typography>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="info-input">1.1 정보 입력</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5 pl-0"><strong>업체명</strong>: 등록 중인 자기 자신 업체명 자동 입력 <strong>수정 불가</strong></Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>현장명</strong>: 현장명 자유롭게 입력, 단 다른 현장과 중복 불가 <strong>같은 현장 추가 시에도 별도의 식별자 추가 필수</strong></Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>사업자등록번호</strong>: 현장 사업자등록번호</Typography></li>
                    <li className="ml-4"> <Typography variant='small' className="p-0.5"><strong>현장번호</strong>: 같은 현장(사업자등록번호) 추가 등록 시 구분을 위한 번호. <strong>사업자등록번호+현장번호 중복 불가</strong></Typography></li>
                      <li className="ml-4"> <Typography variant='small' className="p-0.5"><strong>주소</strong>: 검색 값 자동입력, 직접 입력 불가</Typography></li>
                        <li className="ml-4"> <Typography variant='small' className="p-0.5"><strong>사업자등록번호</strong>: 협력업체 사업자등록번호 입력, 타업체와 중복불가</Typography></li>
                          <li className="ml-4">  <Typography variant='small' className="p-0.5"><strong>담당자</strong>: 현장 담당자 이름 혹은 직책 등 자유롭게 입력</Typography></li>
                            <li className="ml-4">   <Typography variant='small' className="p-0.5"><strong>연락처</strong>: 현장 담당자와 주로 연락하는 전화번호 입력</Typography></li>
                              <li className="ml-4">  <Typography variant='small' className="p-0.5">추가 연락처: 비상 또는 추가 전화번호 입력</Typography></li>
                                <li className="ml-4">  <Typography variant='small' className="p-0.5"><strong>인입경로</strong>: 현장 최초 컨택/상담 경로 선택</Typography></li>
                                  <li className="ml-4">  <Typography variant='small' className="p-0.5">이메일: 이메일 입력</Typography></li>
                                    <li className="ml-4">  <Typography variant='small' className="p-0.5"><strong>시설 유형</strong>: 관제 기준 <strong>시설 구분(대) </strong> 해당하는 항목 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>시설 상세 유형</strong>: 관제 기준 <strong>시설 구분(소) </strong> 해당하는 항목 선택. 시설 유형의 값에 따라 옵션 변경</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>충전소 운영시간</strong>: 현장에 충전소 설치 시 해당하는 항목 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>이용자 제한</strong>: 현장에 충전소 설치 시 해당하는 항목 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>주차 요금</strong>: 현장에 충전소 설치 시 해당하는 항목 선택</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>주차 요금 입력</strong>: 현장에 충전소 설치 시 해당하는 항목 입력</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5"><strong>주차면</strong>: 현장에 충전소 설치 시 해당하는 항목 입력</Typography></li>
              </div>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="registration-process">1.2 등록</Typography>
                <li className="ml-4"><Typography variant='small' className="p-0.5">필수입력란을 각 형식에 맞게 입력 후 등록하기</Typography></li>
                  <li className="ml-4"><Typography variant='small' className="p-0.5">등록된 업체의 경우 <strong>최초 ID/PASSWORD 모두 사업자등록번호로 생성</strong>되어 로그인 가능</Typography></li>
                    <li className="ml-4"><Typography variant='small' className="p-0.5">등록된 업체의 경우 별도 정보 관리 화면에서 정보 수정 가능</Typography></li>
              </div>
            </div>
            <div>
            <Typography variant='h4' className="pb-1" id="site-update">2. 정보 수정 </Typography>
            <div className='py-1.5'>
              <Typography variant='h5' className="pb-1" id="update">2.1 정보 수정</Typography>
              <li className="ml-4"><Typography variant='small' className="p-0.5">현장의 정보 수정은 입력과 규칙 및 양식이 동일</Typography></li>
                <li className="ml-4"><Typography variant='small' className="p-0.5">현장 계약이 진행되어, 실사까지 완료된 현장의 경우 수정 불가</Typography></li>
            </div>
              <div className='py-1.5'>
                <Typography variant='h5' className="pb-1" id="add-site-number">2.1 동일 현장 관리</Typography>
                <li className="ml-4"> <Typography variant='small' className="p-0.5">동일 현장에 계약 추가/변경이 된 경우, 현장번호를 추가하여 현장 추가 등록 필수</Typography></li>
              </div>
            </div>
            </div>
          <img src="/assets/images/add_site.png" className="w-120 h-auto" alt="업체등록" />
        </section>
        <PrevNextButtons
            previousPage={{
              href: "/guide/epc/admin/process",
              title: "EPC 업무 플로우"
            }}
            nextPage={{
              href: "/guide/epc/admin/pre-contract/sales",
              title: "영업 진행 관리"
            }}
        />
      </div>
    </DocsLayout>
  )
}
