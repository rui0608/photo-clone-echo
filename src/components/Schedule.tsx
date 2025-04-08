
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Schedule = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* 背景ロゴ画像 */}
          <div className="absolute left-0 top-0 w-2/5 h-full z-0 hidden md:block">
            <img 
              src="/lovable-uploads/db776b49-fd7b-401b-b770-13002fa2523d.png" 
              alt="鶴のロゴ" 
              className="w-full h-full object-contain opacity-50" 
            />
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10">
            {/* 見出しセクション */}
            <h2 className="text-custom-green text-6xl font-bold mb-2">Schedule</h2>
            <p className="text-custom-green text-xl mb-16">一日の流れと給与形態</p>
            
            {/* 左右に分かれたコンテンツ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* 左側: 一日の流れ */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-8">一日の流れ</h3>
                <div className="space-y-8">
                  {/* タイムスケジュール項目 */}
                  <div className="flex">
                    <div className="w-20 text-custom-green font-bold">8:30</div>
                    <div>
                      <p className="text-white font-bold">出勤</p>
                      <p className="text-white text-sm mt-1">朝のミーティング、業務準備</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex">
                    <div className="w-20 text-custom-green font-bold">9:00</div>
                    <div>
                      <p className="text-white font-bold">業務開始</p>
                      <p className="text-white text-sm mt-1">ケア提供、各種サービス</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex">
                    <div className="w-20 text-custom-green font-bold">12:00</div>
                    <div>
                      <p className="text-white font-bold">昼食休憩</p>
                      <p className="text-white text-sm mt-1">1時間の休憩時間</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex">
                    <div className="w-20 text-custom-green font-bold">13:00</div>
                    <div>
                      <p className="text-white font-bold">午後の業務</p>
                      <p className="text-white text-sm mt-1">アクティビティ、ケアプラン作成</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex">
                    <div className="w-20 text-custom-green font-bold">17:30</div>
                    <div>
                      <p className="text-white font-bold">業務終了</p>
                      <p className="text-white text-sm mt-1">引き継ぎ、記録作成</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右側: 給与形態 */}
              <div>
                <h3 className="text-white text-2xl font-bold mb-8">給与形態</h3>
                <Card className="bg-white rounded-lg overflow-hidden mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-black text-xl font-bold mb-4">正社員</h4>
                    <p className="text-black mb-2">・月給 250,000円〜350,000円</p>
                    <p className="text-black mb-2">・賞与年2回（業績による）</p>
                    <p className="text-black mb-2">・昇給年1回</p>
                    <p className="text-black mb-2">・各種社会保険完備</p>
                    <p className="text-black mb-2">・交通費支給（上限あり）</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white rounded-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="text-black text-xl font-bold mb-4">パート・アルバイト</h4>
                    <p className="text-black mb-2">・時給 1,200円〜1,500円</p>
                    <p className="text-black mb-2">・勤務日数・時間は相談可能</p>
                    <p className="text-black mb-2">・昇給あり（年1回）</p>
                    <p className="text-black mb-2">・各種社会保険（条件による）</p>
                    <p className="text-black mb-2">・交通費支給（上限あり）</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
