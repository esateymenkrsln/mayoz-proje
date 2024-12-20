// Mayoz bölünmeleri sayfasını gösterme
function showMayoz() {
    // "Mayoz Bölünmeleri" sayfasını göster
    document.getElementById('mayoz-sections').style.display = 'block';
    // Ana sayfayı gizle
    document.getElementById('personal-info').style.display = 'none';
    document.getElementById('project-purpose').style.display = 'none';
    document.getElementById('mayoz-button').style.display = 'none';
}

// Evre açıklamalarını gösterme
function showEvreInfo(evre) {
    let bilgi = "";
    switch (evre) {
        case "Profaz 1":
            bilgi = "Profaz 1 evresinde kromozomlar belirginleşir ve homolog kromozomlar eşleşir.";
            break;
        case "Metafaz 1":
            bilgi = "Metafaz 1 evresinde kromozomlar hücrenin ortasında dizilir.";
            break;
        case "Anafaz 1":
            bilgi = "Anafaz 1 evresinde homolog kromozomlar zıt kutuplara çekilir.";
            break;
        case "Telofaz 1":
            bilgi = "Telofaz 1 evresinde hücre ikiye bölünür ve çekirdekler yeniden oluşur.";
            break;
        case "Profaz 2":
            bilgi = "Profaz 2 evresinde yeni hücrelerin kromozomları belirginleşir.";
            break;
        case "Metafaz 2":
            bilgi = "Metafaz 2 evresinde kromozomlar hücrenin ortasında dizilir.";
            break;
        case "Anafaz 2":
            bilgi = "Anafaz 2 evresinde kromozomlar ayrı kutuplara çekilir.";
            break;
        case "Telofaz 2":
            bilgi = "Telofaz 2 evresinde hücreler tamamen ayrılır ve çekirdekler yeniden oluşur.";
            break;
        default:
            bilgi = "Bu evre hakkında bilgi bulunamadı.";
    }

    // İlgili evreye ait bilgiyi göster
    if (evre.includes("1")) {
        document.getElementById('mayoz1-info').innerHTML = bilgi;
    } else {
        document.getElementById('mayoz2-info').innerHTML = bilgi;
    }
}

// Ana sayfaya dönme
function goBackToHome() {
    // Ana sayfayı göster
    document.getElementById('personal-info').style.display = 'block';
    document.getElementById('project-purpose').style.display = 'block';
    document.getElementById('mayoz-button').style.display = 'block';
    document.getElementById('mayoz-sections').style.display = 'none';
}
