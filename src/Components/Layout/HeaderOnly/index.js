import Header from '../componenets/Header';
export default function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">Container</div>
            <div className="content">{children}</div>
        </div>
    );
}
