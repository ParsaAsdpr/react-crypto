import React from "react";
import Axios from "axios";
import TableRow from "./components/TableRow";
import Table from "./components/Table";

function App() {
  const [coinList, setCoinList] = React.useState([]);
  const [searchWord, setSearchWord] = React.useState("");

  React.useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res) => {
        setCoinList(res.data.coins);
      }
    );
  }, []);


  const filteredCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div>
      <div className="mx-auto w-full px-5 md:w-1/2 xl:w-1/4 py-5">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl text-center pb-5">جستجو ارز</h1>
        <input
        dir="rtl"
        className="w-full bg-white bg-opacity-20 py-4 px-5 rounded-md outline-none focus:border-blue-500 text-white border border-white border-opacity-20"
          type="text"
          placeholder="نام رمز ارز خود را وارد کنید..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}        />
      </div>

      <Table>
        {filteredCoins.map((coin) => (
          <TableRow
            name={coin.name}
            price={coin.price}
            symbol={coin.symbol}
            icon={coin.icon}
            key={coin.id}
            rank={coin.rank}
            priceChange={coin.priceChange1d}
            marketcap={coin.marketCap}
          />
        ))}
      </Table>
    </div>
  );
}

export default App;
