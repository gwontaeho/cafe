export default function Talk() {
    return (
        <div className="flex-1">
            <header className="border-b h-20 items-center flex px-5 space-x-1">
                <h1>톡</h1>
                <span className="material-symbols-rounded">chevron_right</span>
                <h2>점주 톡</h2>
            </header>
            <div className="max-w-screen-md space-y-10">
                <main className="p-5 space-y-10">
                    <h1 className="text-lg">게시글 제목입니다.</h1>
                    <pre className="whitespace-pre-wrap">
                        누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다.
                        국무위원은 국무총리의 제청으로 대통령이 임명한다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 중앙선거관리위원회는
                        대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다. 국가는
                        과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 국회의원과 정부는 법률안을 제출할 수 있다. 의무교육은
                        무상으로 한다. 국회는 의장 1인과 부의장 2인을 선출한다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그
                        정치적 중립성은 준수된다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에
                        응하기 위하여 국가안전보장회의를 둔다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에
                        관한 것도 또한 같다. 선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다. 대한민국의 영토는
                    </pre>
                </main>
                <div className="p-5 space-y-5">
                    <p>댓글</p>
                    <div className="flex space-x-5">
                        <input className="input w-full" />
                        <button className="button">
                            <span className="material-symbols-rounded">reply</span>
                        </button>
                    </div>
                    <div className="border-t">
                        <div className="p-3 py-5 space-y-1 border-b">
                            <p className="text-sm"></p>
                            <p>누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다</p>
                        </div>
                        <div className="p-3 py-5 space-y-1 border-b">
                            <p className="text-sm"></p>
                            <p>국가안전보장에 관련되는 대외정책·군사정책과 국</p>
                        </div>
                        <div className="p-3 py-5 space-y-1 border-b">
                            <p className="text-sm"></p>
                            <p>누구든지 심사를 법원에 청구할 권리를 가진다</p>
                        </div>
                        <div className="p-3 py-5 space-y-1 border-b">
                            <p className="text-sm"></p>
                            <p>선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
