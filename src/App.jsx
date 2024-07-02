import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Info } from 'lucide-react';


// eslint-disable-next-line react/prop-types
const FeatureCell = ({ feature }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 relative group">
    <div className="flex items-center">
      {/* eslint-disable-next-line react/prop-types */}
      {feature.name}
      <span className="ml-1 text-[#1B57D9] cursor-help">
        <Info size={16} />
      </span>
    </div>
    <div className="absolute z-10 invisible group-hover:visible bg-[#1B57D9] text-white text-xs rounded p-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-64">
      {/* eslint-disable-next-line react/prop-types */}
      {feature.description}
      <svg className="absolute text-[#1B57D9] h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
      </svg>
    </div>
  </td>
);

const ComparisonDashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const categories = [
    { id: 'platform', name: 'Platform Companies', examples: ['OpenAI', 'Anthropic', 'Meta'] },
    { id: 'cloud', name: 'Cloud Providers', examples: ['Azure', 'AWS', 'Google Cloud'] },
    { id: 'solution', name: 'Solution Providers', examples: ['KoreAI', 'Haptik', 'YellowAI'] },
  ];

  const featureCategories = [
    {
      name: 'Core Capabilities',
      features: [
        { name: 'Omni-channel', description: 'One bot to serve on Web, Mobile app, WhatsApp, Messenger' },
        { name: 'Multi-modal', description: 'Combination of text, voice and video capabilities' },
        { name: 'Multi-model', description: 'Bots that can be built on different LLM models' },
        { name: 'Interactive UI', description: 'GenAI bots with interactive elements' },
        { name: 'Integrations', description: 'Low code integration with other platforms' },
      ]
    },
    {
      name: 'Advanced Features',
      features: [
        { name: 'Evaluations', description: 'Managing quality of LLM outputs' },
        { name: 'Multi-instance', description: 'Highly available Scalable infrastructure based on traffic volume' },
        { name: 'Speed', description: 'Zero or Customisable delays for bot response' },
        { name: 'LLM Cost Optimization', description: 'Model selection based on use case' },
        { name: 'Multilingual Support', description: 'Support for multiple languages' },
        { name: 'Custom Training', description: 'Ability to train on custom data' },
      ]
    },
    {
      name: 'Analytics and Testing',
      features: [
        { name: 'Analytics Dashboard', description: 'Detailed analytics and insights' },
        { name: 'A/B Testing', description: 'Test different bot versions' },
        { name: 'Sentiment Analysis', description: 'Analyze user sentiment in conversations' },
      ]
    },
    {
      name: 'Communication and Specialization',
      features: [
        { name: 'Live chat handover', description: 'Support for handling incoming customer queries and requests by humans' },
        { name: 'Outbound Communication', description: 'Proactive outreach and messaging capabilities' },
        { name: 'Outreach Solutions', description: 'Tools and features for campaign management and customer engagement' },
        { name: 'Healthcare Expertise', description: 'Specialized knowledge and features for healthcare use cases' },
      ]
    },
    {
      name: 'Security and Compliance',
      features: [
        { name: 'Compliance & Security', description: 'Meet industry standards for data protection' },
      ]
    },
  ];

  const allFeatures = featureCategories.flatMap(category => category.features);

  const comparisons = {
    platform: {
      'OpenAI': [false, false, true, false, false, false, false, true, false, true, true, false, false, false, true, false, false, false, false],
      'Anthropic': [false, false, true, false, false, false, false, true, false, true, true, false, false, false, true, false, false, false, false],
      'Meta': [false, false, true, false, false, false, false, true, false, true, true, false, false, false, true, false, false, false, false],
    },
    cloud: {
      'Azure': [false, false, true, false, true, false, true, false, true, true, true, true, false, false, true, false, false, false, false],
      'AWS': [false, false, true, false, true, false, true, false, true, true, true, true, false, false, true, false, false, false, false],
      'Google Cloud': [false, false, true, false, true, false, true, false, true, true, true, true, false, false, true, false, false, false, false],
    },
    solution: {
      'KoreAI': [true, true, false, true, true, true, true, true, false, true, false, true, true, true, true, true, true, false, false],
      'Haptik': [true, true, false, true, true, true, true, true, false, true, false, true, true, true, true, true, true, false, false],
      'YellowAI': [true, true, false, true, true, true, true, true, false, true, false, true, true, true, true, true, true, false, false],
    },
    keyreply: {
      'KeyReply': [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
  };


 
  // eslint-disable-next-line react/prop-types
  const ComparisonTable = ({category}) => (
    <div className="overflow-x-auto">
      {featureCategories.map((featureCategory, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1B57D9]">{featureCategory.name}</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#1B57D9]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Feature</th>
                {Object.keys(comparisons[category]).map((company) => (
                  <th key={company} className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">{company}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featureCategory.features.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <FeatureCell feature={feature} />
                  {Object.keys(comparisons[category]).map((company) => (
                    <td key={company} className="px-6 py-4 whitespace-nowrap text-center">
                      {comparisons[category][company][allFeatures.findIndex(f => f.name === feature.name)] ? (
                        <Check className="mx-auto text-green-500" />
                      ) : (
                        <X className="mx-auto text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
  

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex items-center mb-6">
        <img src="/logo.png" alt="KeyReply Logo" className="mr-4 w-44" />
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary" className="data-[state=active]:bg-[#1B57D9] data-[state=active]:text-white">Summary</TabsTrigger>
          <TabsTrigger value="platform" className="data-[state=active]:bg-[#1B57D9] data-[state=active]:text-white">Platform Companies</TabsTrigger>
          <TabsTrigger value="cloud" className="data-[state=active]:bg-[#1B57D9] data-[state=active]:text-white">Cloud Providers</TabsTrigger>
          <TabsTrigger value="solution" className="data-[state=active]:bg-[#1B57D9] data-[state=active]:text-white">Solution Providers</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <Card>
            <CardHeader className="bg-[#ffffff] text-black">
              <CardTitle className="text-2xl">Summary Comparison</CardTitle>
              <CardDescription className="text-white opacity-80">Compare KeyReply features with other provider types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                {featureCategories.map((featureCategory, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#1B57D9]">{featureCategory.name}</h3>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#1B57D9]">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Feature</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Platform Companies</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Cloud Providers</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Solution Providers</th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">KeyReply</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {featureCategory.features.map((feature, featureIndex) => (
                          <tr key={featureIndex}>
                            <FeatureCell feature={feature} />
                            {categories.map((category) => (
                              <td key={category.id} className="px-6 py-4 whitespace-nowrap text-center">
                                {Object.values(comparisons[category.id]).some(arr => arr[allFeatures.findIndex(f => f.name === feature.name)]) ? (
                                  <Check className="mx-auto text-green-500" />
                                ) : (
                                  <X className="mx-auto text-red-500" />
                                )}
                              </td>
                            ))}
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <Check className="mx-auto text-green-500" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardHeader className="bg-[#ffffff] text-black">
                <CardTitle className="text-2xl">{category.name} Comparison</CardTitle>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <CardDescription className="text-white opacity-80">Compare KeyReply's features with {category.name.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTable category={category.id} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ComparisonDashboard;
