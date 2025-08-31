'use server';

/**
 * @fileOverview AI-powered design idea generator from a room photo.
 *
 * - generateDesignIdeas - A function that generates design ideas based on a room photo.
 * - GenerateDesignIdeasInput - The input type for the generateDesignIdeas function.
 * - GenerateDesignIdeasOutput - The return type for the generateDesignIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignIdeasInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a room, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateDesignIdeasInput = z.infer<typeof GenerateDesignIdeasInputSchema>;

const GenerateDesignIdeasOutputSchema = z.object({
  designIdeas: z.string().describe('A list of design ideas based on the room photo.'),
});
export type GenerateDesignIdeasOutput = z.infer<typeof GenerateDesignIdeasOutputSchema>;

export async function generateDesignIdeas(
  input: GenerateDesignIdeasInput
): Promise<GenerateDesignIdeasOutput> {
  return generateDesignIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignIdeasPrompt',
  input: {schema: GenerateDesignIdeasInputSchema},
  output: {schema: GenerateDesignIdeasOutputSchema},
  prompt: `You are an AI design assistant that helps users generate design ideas for their rooms based on a photo.

Analyze the photo of the room and generate a list of design ideas, including color schemes, wall treatments, and finish suggestions. Also suggest how to improve the lighting of the room.

Photo: {{media url=photoDataUri}}`,
});

const generateDesignIdeasFlow = ai.defineFlow(
  {
    name: 'generateDesignIdeasFlow',
    inputSchema: GenerateDesignIdeasInputSchema,
    outputSchema: GenerateDesignIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
