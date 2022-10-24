import Script from "next/script";
export default function Footer() {
    
    return (
        <footer  className="w3-bottom" id="footer">
            <Script
                id="ticker-tape"
                async={true}
                src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
                onLoad={() => {
                    document.getElementById('footer').appendChild(document.getElementById('ticker-tape'));
                }}>
                {JSON.stringify({
                    "symbols": [
                        {
                            "description": "",
                            "proName": "BINANCE:BTCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NEOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LTCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:QTUMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ADAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XRPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EOSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TUSDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IOTAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XLMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ONTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ICXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VENUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NULSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VETUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PAXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCHABCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCHSVUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:USDCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LINKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WAVESUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:USDSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ONGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HOTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ZILUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ZRXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FETUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BATUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XMRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ZECUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IOSTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CELRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DASHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NANOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OMGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:THETAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ENJUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MITHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MATICUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ATOMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TFUELUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ONEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FTMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALGOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:USDSBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GTOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ERDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DOGEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DUSKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ANKRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WINUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:COSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NPXSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:COCOSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MTLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TOMOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PERLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DENTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MFTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KEYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STORMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DOCKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WANUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FUNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CVCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CHZUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BANDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BUSDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BEAMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XTZUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RENUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RVNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HBARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NKNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KAVAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ARPAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IOTXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RLCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MCOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CTXCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TROYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VITEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FTTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EURUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OGNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DREPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BULLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETHBULLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETHBEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TCTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WRXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LSKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LTOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EOSBULLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EOSBEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XRPBULLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XRPBEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STRATUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AIONUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MBLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:COTIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNBBULLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNBBEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STPTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WTCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DATAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XZCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SOLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CTSIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HIVEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CHRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTCUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTCDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GXSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ARDRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LENDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MDTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STMXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KNCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:REPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LRCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PNTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:COMPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BKRWUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ZENUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SNXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETHUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ETHDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ADAUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ADADOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LINKUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LINKDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VTHOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DGBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GBPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SXPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MKRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DAIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DCRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STORJUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNBUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNBDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XTZUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XTZDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MANAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AUDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:YFIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BALUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BLZUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IRISUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KMDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:JSTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SRMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ANTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CRVUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SANDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OCEANUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NMRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DOTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LUNAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RSRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PAXGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WNXMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BZRXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUSHIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:YFIIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KSMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EGLDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DIAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RUNEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FIOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UMAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EOSUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EOSDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRXUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRXDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XRPUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XRPDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DOTUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DOTDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BELUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WINGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LTCUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LTCDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UNIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NBSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OXTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AVAXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HNTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FLMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UNIUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UNIDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ORNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UTKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XVSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALPHAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AAVEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NEARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SXPUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SXPDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FILUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FILUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FILDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:YFIUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:YFIDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:INJUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AUDIOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CTKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCHUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BCHDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AKROUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AXSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HARDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DNTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STRAXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:UNFIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ROSEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AVAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XEMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AAVEUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AAVEDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SKLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUSDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUSHIUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUSHIDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XLMUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XLMDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GRTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:JUVUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PSGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:1INCHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:REEFUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ATMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ASRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CELOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RIFUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTCSTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRUUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CKBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TWTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FIROUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LITUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SFPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DODOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CAKEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ACMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BADGERUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FISUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PONDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DEGOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALICEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LINAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PERPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RAMPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SUPERUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CFXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EPSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AUTOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TKOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PUNDIXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TLMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:1INCHUPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:1INCHDOWNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MIRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FORTHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BAKEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BURGERUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SLPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SHIBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ICPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:POLSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MDXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MASKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LPTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NUUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XVGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ATAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GTCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TORNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KEEPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ERNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KLAYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PHAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BONDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MLNUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DEXEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:C98USDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CLVUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:QNTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FLOWUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TVKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MINAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RAYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FARMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALPACAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:QUICKUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MBOXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FORUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:REQUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GHSTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WAXPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TRIBEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GNOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XECUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ELFUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DYDXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:POLYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IDEXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VIDTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:USDPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GALAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ILVUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:YGGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SYSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DFUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FIDAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FRONTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CVPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AGLDUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RADUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BETAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RAREUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LAZIOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CHESSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ADXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AUCTIONUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:DARUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BNXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RGTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MOVRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CITYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ENSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KP3RUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:QIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PORTOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:POWRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VGXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:JASMYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:AMPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PLAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PYRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:RNDRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALCXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SANTOSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ANYUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BICOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FLUXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:FXSUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:VOXELUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:HIGHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:CVXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:PEOPLEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OOKIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SPELLUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:USTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:JOEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ACHUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:IMXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GLMRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LOKAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:SCRTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:API3USDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BTTCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ACAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ANCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:XNOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:WOOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ALPINEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:TUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:ASTRUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GMTUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:KDAUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:APEUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BSWUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:BIFIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MULTIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STEEMUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:MOBUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:NEXOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:REIUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GALUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LDOUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:EPXUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:OPUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LEVERUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:STGUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:LUNCUSDT"
                        },
                        {
                            "description": "",
                            "proName": "BINANCE:GMXUSDT"
                        }
                    ],
                    "showSymbolLogo": true,
                    "colorTheme": "light",
                    "isTransparent": true,
                    "displayMode": "regular",
                    "locale": "en"
                })}
            </Script>
        </footer>
    )
}