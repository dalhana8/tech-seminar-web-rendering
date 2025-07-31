export const revalidate = 30; //30초마다 자동으로 페이지를 재생성하도록 설정

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimerRevalidateClient from "./TimerRevalidateClient"; // 클라이언트 컴포넌트 import
import { Button } from "@/components/ui/button";
import { getKoreanDateTimeString } from "../lib/utils";
import ISRSearchClient from "./ISRSearchClient";

function getRandomItems(arr, n) {
    if (arr.length <= n) return arr;
    const result = [];
    const used = new Set();
    while (result.length < n) {
        const idx = Math.floor(Math.random() * arr.length);
        if (!used.has(idx)) {
            used.add(idx);
            result.push(arr[idx]);
        }
    }
    return result;
}

export default async function ISRPage() {
   const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
       cache: "force-cache", // 캐시된 데이터 사용 (성능 최적화)
       next: { revalidate: 30 }, // 30초 간격으로 재검증 (ISR 핵심 설정)
   });
   const data = await res.json(); // JSON 데이터로 변환
   const random = getRandomItems(data, 5); // 댓글 목록에서 랜덤하게 5개 선택
   const renderTime = getKoreanDateTimeString(); // 현재 시간을 한국 시간으로 기록 

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <Link href="/">
                        <Button variant="ghost">← Back to Home</Button>
                    </Link>
                    {/* 타이머 클라이언트 컴포넌트 */}
                    <TimerRevalidateClient />
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Incremental Static Regeneration (ISR)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>Page Generated:</strong>{" "}
                                    {renderTime}
                                </div>
                                <div>
                                    <strong>Revalidation:</strong> Every 30
                                    seconds
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Static generation with automatic revalidation.
                                Fast like SSG, but can update content
                                periodically.
                            </p>
                        </CardContent>
                    </Card>
                    <ISRSearchClient items={random} />
                </div>
            </div>
        </div>
    );
}
