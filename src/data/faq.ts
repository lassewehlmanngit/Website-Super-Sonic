export interface FAQ {
  question: string;
  answer: string;
}

export const getStrategicFAQs = (lang: 'de' | 'en' | 'ja'): FAQ[] => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  if (isJa) {
    return [
      {
        question: "なぜこんなに安いのですか？",
        answer: "プロセスを自動化・最適化しているからです。中小企業は、サービスや製品を紹介し、オンラインで見つけてもらえるウェブサイトを求めています。複雑な計画は販売しません。だからこそ、中小企業にとってより速く、より良いサービスを提供できます。"
      },
      {
        question: "変更したい場合はどうすればいいですか？",
        answer: "公開後14日間は「ジョーカーリクエスト」を使用できます。1つの変更をリクエストできます。やっぱりブログが必要？問題ありません。緑ではなく青がいい？お任せください。"
      },
      {
        question: "プログラミングの知識は必要ですか？",
        answer: "まったく必要ありません。メールが書ければ、ウェブサイトを管理できます。また、ビデオ付きのガイドですべてをご案内します。"
      },
      {
        question: "14日後はどうなりますか？",
        answer: "ウェブサイトはお客様のものです。コードはお客様のGitHubアカウントにあります。どの開発者にも変更を依頼できます。または、統合されたCMSを使用して、テキストや画像を自分で変更できます。"
      },
      {
        question: "ウェブサイトは本当に個人情報保護法に準拠していますか？",
        answer: "はい。日本国内でホスティングしています。海外クラウドなし、同意なしのトラッキングCookieなし。完全な個人情報保護法準拠は、追加料金ではなく標準です。"
      }
    ];
  }

  if (isDe) {
    return [
      {
        question: "Warum so günstig?",
        answer: "Weil wir unseren Prozess automatisiert und optimiert haben. Mittelständler wollen Webseiten die funktionieren und ihren Service/Produkt darstellen – auffindbar online. Wir verkaufen dir keine Raketenpläne. Daher sind wir schneller und besser für den Mittelstand."
      },
      {
        question: "Was, wenn ich was ändern will?",
        answer: "Du hast nach dem Launch 14 Tage Zeit für einen 'Joker-Request'. Damit kannst du eine Änderung beantragen. Du brauchst doch einen Blog? Kein Problem. Statt grün willst du lieber blau? Sieh es als erledigt."
      },
      {
        question: "Muss ich programmieren können?",
        answer: "Null. Wenn du eine E-Mail schreiben kannst, kannst du auch deine Website pflegen. Wir bieten dir außerdem alles in einem Guide an, mit Video, und führen dich durch."
      },
      {
        question: "Was passiert nach den 14 Tagen?",
        answer: "Die Website gehört dir. Der Code liegt in deinem GitHub-Account. Du kannst jeden Entwickler beauftragen, Änderungen vorzunehmen. Oder du nutzt das integrierte CMS, um Texte und Bilder selbst zu ändern."
      },
      {
        question: "Ist die Website wirklich DSGVO-konform?",
        answer: "Ja. Wir hosten in Frankfurt, Deutschland. Keine US-Cloud, keine tracking Cookies ohne Einwilligung. Volle DSGVO-Konformität ist bei uns Standard, nicht extra."
      }
    ];
  }

  return [
    {
      question: "Why so cheap?",
      answer: "Because we've automated and optimized our process. SMBs want websites that work and showcase their service/product – discoverable online. We don't sell you rocket plans. That's why we're faster and better for SMBs."
    },
    {
      question: "What if I want to change something?",
      answer: "You have 14 days after launch for a 'Joker Request'. You can request one change. Need a blog after all? No problem. Want blue instead of green? Consider it done."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Zero. If you can write an email, you can maintain your website. We also provide everything in a guide, with video, and walk you through it."
    },
    {
      question: "What happens after the 14 days?",
      answer: "The website is yours. The code lives in your GitHub account. You can hire any developer to make changes. Or use the integrated CMS to change text and images yourself."
    },
    {
      question: "Is the website really GDPR compliant?",
      answer: "Yes. We host in Frankfurt, Germany. No US cloud, no tracking cookies without consent. Full GDPR compliance is standard with us, not extra."
    }
  ];
};
