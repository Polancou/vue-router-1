import axios from "axios";
import {type Ref, ref} from "vue";

export const useGetData = () => {
    const error: Ref<string | null> = ref(null)
    const data: Ref<any> = ref<any>()
    const loading: Ref<boolean> = ref(true)

    const getData = async (url: string) => {
        try {
            const res = await axios.get(url)
            data.value = res.data
        } catch (e) {
            console.error(e)
            error.value = "Error de servidor"
        } finally {
            loading.value = false
        }
    }

    return {getData, data, loading, error}
}