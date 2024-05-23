        async function getDataPagi() {
            const spreadsheetId = '1Bw8wssgVcf-nFQnO6c67v5jl24svZAzKaXdeDUQN24I';
            const apiKey = 'AIzaSyAsfZuxY0wSYsyvFRg8Z056JP9esuUb5o4';
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`;
            const result = await fetch(url);
            const { sheets } = await result.json();
            const firstSheet = sheets[2];
            const data = firstSheet.data[0].rowData
                .filter((_, index) => index !== 0) // Mulai dari index 1 (menghindari nama kolom)
                .map(row => {
                    const { values } = row;
                    return {
                        no: values[0].formattedValue,
                        lokasi: values[1].formattedValue,
                        rupam: values[2].formattedValue,
                        tanggal: values[3].formattedValue,
                        jam: values[4].formattedValue,
                    };
                });
            return data;
        }
    
        function dataItemTemplatePagi(item) {
    if (item.lokasi && item.rupam && item.tanggal && item.jam) {
        return (
            `<tr>
                <td data-header="No">${item.no}</td>
                <td data-header="Lokasi">${item.lokasi}</td>
                <td data-header="Rupam">${item.rupam}</td>
                <td data-header="Tanggal">${item.tanggal}</td>
                <td data-header="Jam">${item.jam}</td>
            </tr>`
        );
    } else {
        return ''; // Jangan mengembalikan template jika ada nilai yang tidak terdefinisi
    }
}

    
        // Tambahkan kode ini di dalam script renderData Anda
        async function renderDataPagi() {
            const wrapperDOM = document.getElementById('wrapperPagi');
            const loadingDOM = document.getElementById('loadingPagi');
            loadingDOM.style.display = 'block'; // Tampilkan spinner
            try {
                const data = await getDataPagi();
                wrapperDOM.innerHTML = data.map(item => dataItemTemplatePagi(item)).join('');
            } catch (error) {
                wrapperDOM.innerHTML = error;
            }
            loadingDOM.style.display = 'none'; // Sembunyikan spinner setelah data dimuat
        }
    
        renderDataPagi();
