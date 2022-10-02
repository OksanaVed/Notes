function Main() {
    return (
        <div className="main2">
            <div>
                <a href="/create"><button className="btn btn-secondary">Створити замітку</button></a>
            </div>
            <div>
            <a href="/note"><button className="btn btn-secondary">Подивитись замітку</button></a>
            </div>
            <div className="mt-5">
                    <p><b>ShareNotes</b> – сервіс для обміну замітками. Створіть замітку, відправте силку на замітку і ваш друг зможе її подивитись.
                Після перегладу замітка буде видалена (або через 15 хвилин з часу створення).</p>
                    <p>Як створити замітку? </p>
                    <ul style={{"listStyleType":"circle"}}>
                        <li>Перейдіть за посиланням</li>
                        <li>Вставте текст і натисніть "Створити"</li>
                        <li>Відправте згенерований адрес другу!</li>
                    </ul>
                    <p>Як прочитати замітку? Перейдіть по одержаному URL, або введіть адрес самостійно - руками.</p>
                </div>
                
         </div>
    );
}

export default Main;