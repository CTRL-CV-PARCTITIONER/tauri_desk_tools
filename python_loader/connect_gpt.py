import openai

openai.api_key = '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'

prompt = input("请输入:")

response = openai.Completion.create(
    engine='text-davinci-003',  # 选择使用的引擎
    prompt=prompt,  # 提供一个输入文本作为提示
    max_tokens=1000  # 生成的最大令牌数
)

generated_text = response.choices[0].text.strip()
print(generated_text)