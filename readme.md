## proses pembentukan function edit :

1. buat dataEdit, dan lakukan return {...state, isShowEdit: true, dataEdit: action.payload}
2. di action lakukan :
export const showEditForm = (dataInitial) => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_SHOW_EDIT',
         --- payload:dataInitial ---
        })
    }
}
3.     di dalam item lakukan :
const showFormEdit = () => {
        props.showEditForm(props.dataLibrary);
    }

    --- ini smua berasal dari Books(Main/utama) dia.

#CERITANYA KITA MAU MASUKKAN ISI DATA SEBENARNYA KE DALAM DATA YANG BARU SUPAYA DAPAT ID GITU...

4. LAKUKAN APA YANG COMPONENT EDIT LAKUKAN SILAHKAN CEK... ( DISANA ADA YANG NAMANYA USE EFFECT, NAH USE EFFECT INI MEMASUKKAN DATA HASIL PERUBAHAN KE DALAM DATA. )

5. LIHAT FUNCTION DI DALAM ACTION.

6. LIHAT FUNCTION DALAM REDUCER.


## MENGENAI DELETE MNCULIN NAMA FILE DELETE, ITU KALAU
## KITA UDAH TAU APA ISI DATA DELETE KAN TINGGAL MANGGIL.. KARENA KITA JUGA UDAH DEFINE DI PROSES SEBELUM BRO. NENGOK AJA HASIL" CONSOLELOG ITU