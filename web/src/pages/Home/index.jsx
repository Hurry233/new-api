/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  Typography,
  Input,
  ScrollList,
  ScrollItem,
} from '@douyinfe/semi-ui';
import {
  IconGithubLogo,
  IconPlay,
  IconFile,
  IconCopy,
} from '@douyinfe/semi-icons';
import {
  Moonshot,
  OpenAI,
  XAI,
  Zhipu,
  Volcengine,
  Cohere,
  Claude,
  Gemini,
  Suno,
  Minimax,
  Wenxin,
  Spark,
  Qingyan,
  DeepSeek,
  Qwen,
  Midjourney,
  Grok,
  AzureAI,
  Hunyuan,
  Xinference,
} from '@lobehub/icons';

const { Text } = Typography;

const API_ENDPOINTS = [
  '/v1/chat/completions',
  '/v1/responses',
  '/v1/messages',
  '/v1beta/models',
  '/v1/embeddings',
  '/v1/rerank',
  '/v1/images/generations',
  '/v1/images/edits',
  '/v1/images/variations',
  '/v1/audio/speech',
  '/v1/audio/transcriptions',
  '/v1/audio/translations',
];

const DOCS_LINK = 'https://github.com/QuantumNous/new-api#documentation';
const PRIMARY_ACTION_LINK = 'https://github.com/QuantumNous/new-api/releases/latest';
const GITHUB_LINK = 'https://github.com/QuantumNous/new-api';

const resolveInitialLanguage = () => {
  if (typeof navigator === 'undefined' || !navigator.language) {
    return 'en';
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

const useIsMobileView = () => {
  const getIsMobile = () =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const Home = () => {
  const [language, setLanguage] = useState(resolveInitialLanguage);
  const isChinese = language === 'zh';
  const [endpointIndex, setEndpointIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState('');
  const isMobile = useIsMobileView();

  const serverAddress = useMemo(() => {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return window.location.origin;
    }
    return 'https://api.example.com';
  }, []);

  const endpointItems = useMemo(
    () => API_ENDPOINTS.map((value) => ({ value })),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setEndpointIndex((prev) => (prev + 1) % endpointItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [endpointItems.length]);

  useEffect(() => {
    if (!copyStatus) {
      return undefined;
    }
    const timer = setTimeout(() => setCopyStatus(''), 1800);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  const handleCopyBaseURL = async () => {
    const text = serverAddress;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      } else {
        throw new Error('Clipboard API unavailable');
      }
      setCopyStatus(isChinese ? '已复制到剪贴板' : 'Copied to clipboard');
    } catch (error) {
      console.error('Copy failed', error);
      setCopyStatus(isChinese ? '复制失败，请重试' : 'Failed to copy');
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-full border-b border-semi-color-border min-h-[520px] md:min-h-[600px] lg:min-h-[700px] relative overflow-x-hidden'>
        <div className='blur-ball blur-ball-indigo' />
        <div className='blur-ball blur-ball-teal' />

        <div className='flex justify-end px-4 pt-8 md:pt-10 lg:pt-12'>
          <Button
            size={isMobile ? 'small' : 'default'}
            onClick={toggleLanguage}
            className='!rounded-full'
          >
            {isChinese ? 'Switch to English' : '切换到中文'}
          </Button>
        </div>

        <div className='flex items-center justify-center h-full px-4 pb-16 md:pb-20 lg:pb-24'>
          <div className='flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-6 md:mt-10'>
            <div className='flex flex-col items-center justify-center mb-6 md:mb-8'>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-semi-color-text-0 leading-tight ${isChinese ? 'tracking-wide md:tracking-wider' : ''}`}
              >
                {isChinese ? (
                  <>
                    统一的
                    <br />
                    <span className='shine-text'>大模型接口网关</span>
                  </>
                ) : (
                  <>
                    The Unified
                    <br />
                    <span className='shine-text'>LLMs API Gateway</span>
                  </>
                )}
              </h1>
              <p className='text-base md:text-lg lg:text-xl text-semi-color-text-1 mt-4 md:mt-6 max-w-xl'>
                {isChinese
                  ? '更好的价格，更好的稳定性，只需要将模型基址替换为：'
                  : 'Better pricing and stability—simply replace your model base URL with:'}
              </p>
              <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full mt-4 md:mt-6 max-w-md'>
                <Input
                  readOnly
                  value={serverAddress}
                  className='flex-1 !rounded-full'
                  size={isMobile ? 'default' : 'large'}
                  suffix={
                    <div className='flex items-center gap-2'>
                      <ScrollList
                        bodyHeight={32}
                        style={{ border: 'unset', boxShadow: 'unset' }}
                      >
                        <ScrollItem
                          mode='wheel'
                          cycled
                          list={endpointItems}
                          selectedIndex={endpointIndex}
                          onSelect={({ index }) => setEndpointIndex(index)}
                        />
                      </ScrollList>
                      <Button
                        type='primary'
                        onClick={handleCopyBaseURL}
                        icon={<IconCopy />}
                        className='!rounded-full'
                      />
                    </div>
                  }
                />
                {copyStatus && (
                  <span className='text-xs text-semi-color-text-2'>{copyStatus}</span>
                )}
              </div>
            </div>

            <div className='flex flex-row gap-4 justify-center items-center flex-wrap'>
              <Button
                theme='solid'
                type='primary'
                size={isMobile ? 'default' : 'large'}
                className='!rounded-3xl px-8 py-2'
                icon={<IconPlay />}
                onClick={() => window.open(PRIMARY_ACTION_LINK, '_blank', 'noopener,noreferrer')}
              >
                {isChinese ? '立即开始' : 'Get Started'}
              </Button>
              <Button
                size={isMobile ? 'default' : 'large'}
                className='flex items-center !rounded-3xl px-6 py-2'
                icon={<IconFile />}
                onClick={() => window.open(DOCS_LINK, '_blank', 'noopener,noreferrer')}
              >
                {isChinese ? '查看文档' : 'Documentation'}
              </Button>
              <Button
                size={isMobile ? 'default' : 'large'}
                className='flex items-center !rounded-3xl px-6 py-2'
                icon={<IconGithubLogo />}
                onClick={() => window.open(GITHUB_LINK, '_blank', 'noopener,noreferrer')}
              >
                GitHub
              </Button>
            </div>

            <div className='mt-12 md:mt-16 lg:mt-20 w-full'>
              <div className='flex items-center mb-6 md:mb-8 justify-center'>
                <Text
                  type='tertiary'
                  className='text-lg md:text-xl lg:text-2xl font-light'
                >
                  {isChinese ? '支持众多的大模型供应商' : 'Supports a wide range of AI providers'}
                </Text>
              </div>
              <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Moonshot size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <OpenAI size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <XAI size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Zhipu.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Volcengine.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Cohere.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Claude.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Gemini.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Suno size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Minimax.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Wenxin.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Spark.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Qingyan.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <DeepSeek.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Qwen.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Midjourney size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Grok size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <AzureAI.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Hunyuan.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Xinference.Color size={40} />
                </div>
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                  <Text className='!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl font-bold'>
                    30+
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
