import supabase from "../../db";

export default async function handler(req, res) {
    try {
        const {id} = req.query;
        if (id === undefined) throw Error("query(id) is required")
        const { data, error } = await supabase
            .from('traders')
            .select()
            .eq('id', id)
        if (error) throw error;
        if (data.length === 0) res.status(404).json({})
        else res.status(200).json(data[0])
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}