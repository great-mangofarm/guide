import { DocsLayout } from '@/components/layouts/DocsLayout'
import {Typography} from "@/components/ui/typography.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import DownArrow from "@/assets/down.svg?react"
import DownLeftArrow from "@/assets/down_singleflex.svg?react"
import DownRightDualArrow from "@/assets/singletodual.svg?react"
import LeftArrow from "@/assets/shortleft.svg?react"
import DownRightFlexArrow from "@/assets/downsingleflex.svg?react"
import DownErrorArrow from "@/assets/error-down-arrow.svg?react"
import {PrevNextButtons} from "@/components/PrevNextButtons.tsx";

export default function EPCAdminProcess() {
    return (
        <DocsLayout>
            <div className="space-y-6">
                <Typography variant='h2'>EPC 업무 플로우</Typography>

                <div className="w-full flex flex-col -space-y-0.5 justify-center items-center p-12 bg-grey-50 rounded-lg">
                    <div className='w-full flex flex-col gap-0.5 mb-8 -ml-6'>
                    <Typography variant="small" >업무 프로세스 진행 중 데이터 오류, 재작업, 업무 혼선을 방지하고 데이터 정합성을 보장하기 위해 단계별 제약 조건을 적용하고 있습니다.</Typography>
                    <Typography variant="small" >• <strong>순차적 진행 원칙:</strong> 이전 단계의 필수 작업이 완료되어야 다음 단계로 진행 가능</Typography>
                    <Typography variant="small" >• <strong>단계별 잠금 기능:</strong> 정 단계 이후에는 이전 단계의 데이터 수정이 제한</Typography>
                    <Typography variant="small" >• <strong>데이터 정합성 보장:</strong> 단계별 데이터 간 일관성과 무결성을 유지</Typography>
                    </div>
                    <div>
                    <div className="border-warning border-1 bg-warning-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            업체 관리  <Badge variant="warning"  className="ml-1 align-text-top">운영 관리 {'>'} 업체 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• EPC 업무지원 시스템을 이용하기 위한 협력 업체 등록</Typography>
                        <Typography variant='small' className="p-0.25">• 영업 🡘 공사 업체 언동을 위한 업체 간 설정</Typography>
                    </div>
                </div>
<DownArrow className="z-10"/>
                <div >
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            현장 관리  <Badge   className="ml-1 align-text-top">계약 전 관리 {'>'} 현장 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 영업, 상담을 진행한 현장 정보 등록</Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 단계가 진행되어 실사가 완료된 경우 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 현장 등록 시 <span className="text-primary-strong">영업 진행 관리</span>에 데이터 생성</Typography>
                    </div>

                </div>
                    <DownArrow className="z-10"/>
                <div >
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            영업 진행 관리  <Badge  className="ml-1 align-text-top">계약 전 관리 {'>'} 영업 진행 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 계약 진행을 위한 기본 정보 입력 </Typography>
                        <Typography variant='small' className="p-0.25">• 충전기 및 부자재 수량, 실사 공사 업체 선정 및 날짜 정보 입력 후 실사 요청 </Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 실사가 완료된 경우 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 실사 요청 완료 시 <span className="text-primary-strong">실사 관리</span>에 데이터 생성</Typography>
                    </div>

                </div>
                    <DownArrow className="z-10"/>
                <div >
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            실사 관리  <Badge   className="ml-1 align-text-top">계약 전 관리 {'>'} 실사 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 영업 진행 관리에서 요청받은 정보 기반으로 실사 진행 </Typography>
                        <Typography variant='small' className="p-0.25">• 실제 실사 완료 후 공사 정보 입력 및 현장 점검 확인서 업로드 </Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 해당 실사건으로 계약 후 환경부 승인 시 수정 불가</Typography>
                    </div>

                </div>
                    <DownArrow className="z-10"/>
                <div >
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            계약 관리  <Badge   className="ml-1 align-text-top">계약 관리 {'>'} 계약 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 완료된 실사건을 선택하여 등록 </Typography>
                        <Typography variant='small' className="p-0.25">• 환경공단 및 에버온 필수 계약 서류 등록 </Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 계약 등록 후 환경부 승인 시 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 계약 정상 등록 시 <span className="text-primary-strong">서류 관리</span>에 데이터 생성</Typography>
                    </div>

                </div>
                    <DownArrow className="z-10"/>
                <div >
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            환경부 승인 / 서류 관리  <Badge   className="ml-1 align-text-top">계약 관리 {'>'} 서류 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 환경부 승인 정보 등록 </Typography>
                        <Typography variant='small' className="p-0.25 ">• 계약 관리에서 업로드된 서류 검수 </Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 환경부 승인 설정 시 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 환경부 승인 설정 시 <span className="text-primary-strong">공사 요청 관리</span>에 데이터 생성</Typography>
                    </div>

                </div>
                    <DownLeftArrow className="z-10 pr-56 w-112"/>
                <div className="flex gap-6">
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            충전기 출고 요청  <Badge   className="ml-1 align-text-top">공사 관리 {'>'} 공사 요청 관리</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 실사 관리 데이터를 바탕으로 충전기 수령 정보 입력 후 출고 요청</Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 충전기 출고 완료 시 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 출고 요청 완료 시 <span className="text-primary-strong">충전기 출고</span>에 데이터 생성</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 출고 요청 완료 시 <span className="text-primary-strong">공사 진행 현황</span>에 데이터 생성</Typography>
                    </div>
                    <div className="border-error border-1 bg-error-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            충전기 입고  <Badge variant="error"  className="ml-1 align-text-top">물동 관리 {'>'} 충전기 입고</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 충전기 신규 데이터 엑셀 업로드 </Typography>
                        <Typography variant='small' className="p-0.25">• 관제에 테스트 충전기(운영중)으로 생성</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 입고된 충전기만 출고 가능</Typography>
                    </div>
                </div>
<div  className="z-10 flex">
    <DownRightDualArrow className='pl-5' /> <DownErrorArrow className='ml-10 z-10'/>
</div>
                <div className="flex -space-x-0.5 items-center">
                    <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            공사 진행 현황 관리  <Badge   className="ml-1 align-text-top">공사 관리 {'>'} 공사 진행 현황</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 공사 진행 현황 날짜 등록 (입고, 착공, 준공 등)</Typography>
                        <Typography variant='small' className="p-0.25">• 충전기 입고 시 인수증 업로드</Typography>
                        <Typography variant='small' className="p-0.25">• 충전소 별 계량기 정보 등록</Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 공사 결과 관리 완료 시 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 준공일 입력 및 인수증 업로드 시 <span className="text-primary-strong">결과 관리</span>에 데이터 생성</Typography>
                    </div>
                    <LeftArrow className="z-10"/>
                    <div className="border-error border-1 bg-error-soft w-100 rounded-md p-4">
                        <Typography variant="medium" className="font-bold">
                            충전기 출고  <Badge variant="error"  className="ml-1 align-text-top">물동 관리 {'>'} 충전기 출고</Badge>
                        </Typography>
                        <Typography variant='small' className="p-0.25">• 출고 요청받은 충전소에 충전소 정보대로 충전기 매칭</Typography>
                        <Typography variant='small' className="p-0.25">• 실제 출고일에 맞춰 출고일 입력 및 인수증 발급</Typography>
                        <Typography variant='smallBold' className="p-0.25 text-error-strong">• 인수증 발급 시 수정 불가</Typography>
                        <Typography variant='smallBold' className="p-0.25">• 공사 진행 현황에서 공사업체가 충전기 인수 후 인수증<br/>업로드 시다운로드 가능</Typography>
                    </div>
                </div>

<DownRightFlexArrow className="z-10 pr-56 w-112" />

                <div className="border-primary border-1 bg-primary-soft w-100 rounded-md p-4">
                    <Typography variant="medium" className="font-bold">
                        최종 결과 관리  <Badge   className="ml-1 align-text-top">공사 관리 {'>'} 공사 결과 관리</Badge>
                    </Typography>
                    <Typography variant='small' className="p-0.25">• 충전소 공사 마무리 및 충전소 운영을 위한<br/>최종 서류 업로드 및 검수</Typography>
                    <Typography variant='small' className="p-0.25 "><strong>• 필수 서류 검수 완료 시 EPC 내 프로세스 완료</strong></Typography>
                </div>
                </div>
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
