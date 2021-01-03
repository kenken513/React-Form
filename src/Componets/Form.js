import React from 'react';
import '../index.css'
import { Input } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError:false,
      content: '',
      hasContentError: false,
    };
  };

  handleChangeEmail(e) {
    const imputValue = e.target.value;
    const isEmpty = e.target.value === '';
    this.setState({
      email: imputValue,
      hasEmailError: isEmpty,
    });
  }

  handleChangeContent(e) {
    const inputValue = e.target.value;
    const isEmpty = e.target.value === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    })
  }

  handleSubmit() {
    this.setState({
      isSubmitted: true,
    });
  }

  render() {

    let hasEmailErrorText;

    let contactForm;

    let hasContentErrorText;

    if(this.state.hasContentError){
      hasContentErrorText = (
        <Text　className="msg-text"　fontSize="2xl">お問い合わせ内容を入力してください
        </Text>
      )
    }

    if(this.state.hasEmailError){
      hasEmailErrorText = (
        <Text className="msg-mail"　fontSize="2xl">メールアドレスを入力してください          
        </Text>
      )
    }

    if(this.state.isSubmitted){
      contactForm = (
        <Text fontSize="4xl" className="msg">
          送信完了
        </Text>
        )
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <Text  fontSize="3xl">メールアドレス（必須）</Text>
          <Input
          placeholder="メールアドレスを入力してください" size="lg" 
          value={this.state.email}
          onChange={(e) => {this.handleChangeEmail(e)} }
          />
          {hasEmailErrorText}
          <Text  fontSize="3xl">お問い合わせ内容（必須）</Text>
          <Textarea
          placeholder="お問い合わせ内容を入力してください"
          className="text" 
          value={this.state.content}
          onChange={(e) => {this.handleChangeContent(e)}}
          />
          {hasContentErrorText}
          <br/>
          <Button 
          colorScheme="teal" size="lg"
          className="btn"
            type='submit'
          >
            送信する
          </Button>
            
          
        </form>
        )
    }
      return(
        <div>
          {contactForm}
        </div>
      )
  }
  
}

export default Form;