import * as MarkdownService from "..//services//markdownService"
export const handleAddMarkdown = async (req,res)=>{
    
    const {contentHTML,contentMarkdown,desc,id}= req.body
    const {descriminator}=req.params
    if(descriminator)
    {       

        const response =await MarkdownService.addMarkDown(descriminator,contentHTML,contentMarkdown,desc,id)

        if(response)
        {
            return res.status(200).json(response)
        }

         return res.status(500).json("server error !!")
    }


return res.status(400).json({message:"missing param !!"})
}

